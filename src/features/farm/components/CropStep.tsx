import * as React from "react";
import { FarmFormData } from "../validation/farm.schema";
import { cn } from "@/lib/utils";

const CROPS = ["Rice", "Wheat", "Maize", "Cotton", "Tomato", "Potato", "Sugarcane", "Other"];

interface CropStepProps {
  data: Partial<FarmFormData>;
  updateData: (data: Partial<FarmFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function CropStep({ data, updateData, onNext, onBack }: CropStepProps) {
  const [selectedCrop, setSelectedCrop] = React.useState(data.crop?.name || "");

  const handleNext = () => {
    if (selectedCrop) {
      updateData({
        crop: { name: selectedCrop, growthStage: data.crop?.growthStage || "" },
      });
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-foreground">Crop Selection</h2>
        <p className="mt-1 text-sm text-muted-foreground">What crop are you growing?</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {CROPS.map((crop) => (
          <button
            key={crop}
            onClick={() => setSelectedCrop(crop)}
            className={cn(
              "flex h-24 flex-col items-center justify-center rounded-xl border-2 transition-all",
              selectedCrop === crop
                ? "border-primary bg-primary/5 text-primary"
                : "border-border bg-card text-card-foreground hover:border-primary/50"
            )}
          >
            <span className="font-medium">{crop}</span>
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
          disabled={!selectedCrop}
          className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
