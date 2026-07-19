import * as React from "react";
import { useFarmStore } from "../store/farm-store";
import { MapPin } from "lucide-react";
import Link from "next/link";

export function FarmSelector() {
  const { activeFarm } = useFarmStore();

  if (!activeFarm) {
    return (
      <Link href="/farms" className="flex items-center gap-2 text-sm text-foreground hover:underline">
        <span className="font-medium text-destructive">No active farm selected</span>
      </Link>
    );
  }

  return (
    <Link href="/farms" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
      <div className="flex items-center gap-2 text-sm text-foreground">
        <span className="font-medium">{activeFarm.name}</span>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <MapPin className="h-3.5 w-3.5" />
        <span>{activeFarm.location.state}, {activeFarm.location.country}</span>
      </div>
      <div className="flex items-center gap-2 hidden md:flex">
        <span className="rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary">
          {activeFarm.crop.name}
        </span>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
          {activeFarm.crop.growthStage}
        </span>
      </div>
    </Link>
  );
}
