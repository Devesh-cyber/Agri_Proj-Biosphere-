import * as React from "react";
import { Loader2 } from "lucide-react";
import { Logo } from "@/components/shared/logo";

export function LoadingScreen() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background">
      <div className="mb-6 animate-pulse">
        <Logo />
      </div>
      <Loader2 className="h-6 w-6 animate-spin text-primary" />
      <p className="mt-4 font-serif text-sm text-muted-foreground">Initializing Biosphere...</p>
    </div>
  );
}
