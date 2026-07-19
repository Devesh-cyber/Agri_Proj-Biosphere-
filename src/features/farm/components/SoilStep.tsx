import * as React from "react";
import { FarmFormData } from "../validation/farm.schema";
import { cn } from "@/lib/utils";

const SOIL_TYPES = ["Loam", "Clay", "Sandy", "Black", "Red", "Unknown"];

interface SoilStepProps {
  data: Partial<FarmFormData>;
  updateData: (data: Partial<FarmFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function SoilStep({ data, updateData, onNext, onBack }: SoilStepProps) {
  const [soilType, setSoilType] = React.useState(data.soil?.type || "Unknown");

  const handleNext = () => {
    updateData({
      soil: { type: soilType },
    });
    onNext();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-foreground">Soil Profile</h2>
        <p className="mt-1 text-sm text-muted-foreground">Select the primary soil type of your farm.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {SOIL_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setSoilType(type)}
            className={cn(
              "flex h-20 items-center justify-center rounded-xl border-2 transition-all",
              soilType === type
                ? "border-primary bg-primary/5 text-primary"
                : "border-border bg-card text-card-foreground hover:border-primary/50"
            )}
          >
            <span className="font-medium">{type}</span>
          </button>
        ))}
      </div>

      <div className="flex justify-between pt-6">
        <button
          onClick={onBack}
          className="rounded-md border border-input bg-background px-6 py-2 text-sm font-medium text-foreground hover:bg-muted"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
