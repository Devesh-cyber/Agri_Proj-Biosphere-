"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import { useFarmStore } from "@/features/farm/store/farm-store";
import { LoadingScreen } from "./LoadingScreen";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading: authLoading } = useAuthStore();
  const { activeFarm, initialized: farmsInitialized } = useFarmStore();
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
    } else if (isAuthenticated && farmsInitialized && !activeFarm && pathname !== "/farms") {
      router.push("/farms");
    }
  }, [isAuthenticated, authLoading, farmsInitialized, activeFarm, pathname, router]);

  if (authLoading || (isAuthenticated && !farmsInitialized)) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
