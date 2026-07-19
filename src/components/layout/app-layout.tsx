import * as React from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { TopNavigation } from "@/components/layout/top-navigation";
import { PageContainer } from "@/components/layout/page-container";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopNavigation />
        <PageContainer>
          {children}
        </PageContainer>
      </div>
    </div>
  );
}
