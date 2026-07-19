"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/shared/logo";
import {
  Activity,
  BarChart3,
  CloudSun,
  FlaskConical,
  LayoutDashboard,
  MessageSquareHeart,
  Settings,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Mission Control", href: "/mission-control", icon: LayoutDashboard },
  { name: "Crop Health", href: "/crop-health", icon: Activity },
  { name: "Biological Readiness", href: "/biological-readiness", icon: FlaskConical },
  { name: "Climate Intelligence", href: "/climate-intelligence", icon: CloudSun },
  { name: "AI Assistant", href: "/ai-assistant", icon: MessageSquareHeart },
  { name: "Marketplace", href: "/marketplace", icon: ShoppingBag },
  { name: "Market Intelligence", href: "/market-intelligence", icon: TrendingUp },
  { name: "Reports", href: "/reports", icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col border-r border-border bg-sidebar px-4 py-6">
      <div className="mb-8">
        <Logo />
      </div>
      <nav className="flex flex-1 flex-col gap-1">
        {navigation.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto space-y-1">
        <Link
          href="/settings"
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
            pathname.startsWith("/settings")
              ? "bg-sidebar-accent text-sidebar-accent-foreground"
              : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
          )}
        >
          <Settings className="h-4 w-4 shrink-0" />
          Settings
        </Link>
        <button
          onClick={() => {
            import("firebase/auth").then(({ signOut }) => {
              import("@/lib/firebase").then(({ auth }) => {
                signOut(auth);
              });
            });
          }}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
}
