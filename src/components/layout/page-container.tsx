import * as React from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PageContainer({ children, className, ...props }: PageContainerProps) {
  return (
    <div 
      className={cn("flex flex-1 flex-col overflow-y-auto bg-background p-8", className)} 
      {...props}
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {children}
      </div>
    </div>
  );
}
