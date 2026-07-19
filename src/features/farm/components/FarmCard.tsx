import * as React from "react";
import { Farm } from "../types/farm";
import { MapPin, Leaf, Droplets, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FarmCardProps {
  farm: Farm;
  onActivate: (id: string) => void;
  onDelete: (id: string) => void;
}

export function FarmCard({ farm, onActivate, onDelete }: FarmCardProps) {
  return (
    <div className={cn("relative flex flex-col rounded-xl border p-6 transition-all", farm.isActive ? "border-primary bg-primary/5 shadow-sm" : "border-border bg-card hover:border-primary/30")}>
      {farm.isActive && (
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
          <CheckCircle2 className="h-3.5 w-3.5" />
          Active
        </div>
      )}
      
      <div className="mb-4 pr-16">
        <h3 className="font-serif text-xl font-semibold text-foreground">{farm.name}</h3>
        <p className="flex items-center text-sm text-muted-foreground mt-1">
          <MapPin className="mr-1.5 h-3.5 w-3.5 shrink-0" />
          {farm.location.village}, {farm.location.district}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm mb-6">
        <div>
          <span className="text-muted-foreground">Crop</span>
          <p className="flex items-center font-medium mt-0.5">
            <Leaf className="mr-1.5 h-3.5 w-3.5 text-primary" />
            {farm.crop.name}
          </p>
        </div>
        <div>
          <span className="text-muted-foreground">Stage</span>
          <p className="font-medium mt-0.5">{farm.crop.growthStage}</p>
        </div>
        <div>
          <span className="text-muted-foreground">Size</span>
          <p className="font-medium mt-0.5">{farm.size.value} {farm.size.unit}</p>
        </div>
        <div>
          <span className="text-muted-foreground">Irrigation</span>
          <p className="flex items-center font-medium mt-0.5">
            <Droplets className="mr-1.5 h-3.5 w-3.5 text-blue-500" />
            {farm.irrigation?.type || "None"}
          </p>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-3 border-t border-border pt-4">
        {!farm.isActive && (
          <button
            onClick={() => onActivate(farm.id)}
            className="flex-1 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Select as Active
          </button>
        )}
        <button
          onClick={() => onDelete(farm.id)}
          className="rounded-md border border-destructive/20 bg-destructive/10 px-3 py-1.5 text-sm font-medium text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
