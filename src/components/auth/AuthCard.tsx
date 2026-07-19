import * as React from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/logo";

interface AuthCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function AuthCard({ title, description, children, footer }: AuthCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="mb-8 flex justify-center">
        <Logo />
      </div>
      <div className="mb-6 text-center">
        <h1 className="font-serif text-2xl font-semibold tracking-tight text-card-foreground">
          {title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-6">{children}</div>
      {footer && <div className="mt-6 text-center text-sm">{footer}</div>}
    </div>
  );
}
