import { Bell, Search, User } from "lucide-react";
import { FarmSelector } from "@/features/farm/components/FarmSelector";
import { useAuthStore } from "@/store/auth-store";

export function TopNavigation() {
  const { user } = useAuthStore();

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-8">
      <div className="flex items-center gap-6">
        <div>
          <h2 className="text-sm font-semibold text-foreground">
            Good Morning, {user?.displayName || user?.email?.split('@')[0] || "Farmer"}
          </h2>
          <p className="text-xs text-muted-foreground">Here is what to do next.</p>
        </div>
        
        <div className="hidden h-8 w-px bg-border md:block" />
        
        <div className="hidden items-center gap-4 md:flex">
          <FarmSelector />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden lg:block">
          <Search className="absolute left-2.5 top-2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search..."
            className="h-8 w-64 rounded-md border border-input bg-transparent pl-8 pr-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
        <button className="relative flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted">
          <Bell className="h-4 w-4 text-foreground" />
          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-destructive" />
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
          <User className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}
