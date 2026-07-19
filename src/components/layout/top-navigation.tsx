import { Bell, Search, MapPin, User } from "lucide-react";

export function TopNavigation() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-8">
      <div className="flex items-center gap-6">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Good Morning, Devesh</h2>
          <p className="text-xs text-muted-foreground">Here is what to do next.</p>
        </div>
        
        <div className="hidden h-8 w-px bg-border md:block" />
        
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 text-sm text-foreground">
            <span className="font-medium">Green Valley Farm</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span>Punjab, India</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary">
              Tomatoes
            </span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              Flowering Stage
            </span>
          </div>
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
