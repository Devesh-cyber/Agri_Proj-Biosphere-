"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuthStore } from "@/store/auth-store";
import { useFarmStore } from "@/features/farm/store/farm-store";
import { verifyTokenWithBackend } from "@/lib/auth-service";
import { apiClient } from "@/lib/axios";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );

  const { setUser, setLoading } = useAuthStore();
  const { loadFarms } = useFarmStore();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          const token = await firebaseUser.getIdToken();
          // Set default authorization header for future API calls
          apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          
          // Verify with backend
          await verifyTokenWithBackend(token);
          
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
          });

          // Load user farms
          await loadFarms();
        } else {
          delete apiClient.defaults.headers.common["Authorization"];
          setUser(null);
        }
      } catch (error) {
        console.error("Auth sync error", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [setUser, setLoading, loadFarms]);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster position="top-right" richColors />
      </QueryClientProvider>
    </NextThemesProvider>
  );
}
