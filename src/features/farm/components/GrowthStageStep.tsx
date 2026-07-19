import * as React from "react";
import { FarmFormData } from "../validation/farm.schema";
import { cn } from "@/lib/utils";

const GROWTH_STAGES: Record<string, string[]> = {
  Rice: ["Seedling", "Vegetative", "Tillering", "Flowering", "Harvest"],
  Wheat: ["Germination", "Tillering", "Stem Extension", "Heading", "Ripening"],
  Maize: ["Seedling", "Vegetative", "Tasseling", "Silking", "Maturity"],
  Tomato: ["Germination", "Vegetative", "Flowering", "Fruiting", "Harvest"],
  Default: ["Seedling", "Vegetative", "Flowering", "Maturity", "Harvest"],
};

interface GrowthStageStepProps {
  data: Partial<FarmFormData>;
  updateData: (data: Partial<FarmFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function GrowthStageStep({ data, updateData, onNext, onBack }: GrowthStageStepProps) {
  const [stage, setStage] = React.useState(data.crop?.growthStage || "");
  const currentCrop = data.crop?.name || "Default";
  const stages = GROWTH_STAGES[currentCrop] || GROWTH_STAGES.Default;

  const handleNext = () => {
    if (stage) {
      updateData({
        crop: { name: currentCrop, growthStage: stage },
      });
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-foreground">Growth Stage</h2>
        <p className="mt-1 text-sm text-muted-foreground">Select the current growth stage for {currentCrop}.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {stages.map((s) => (
          <button
            key={s}
            onClick={() => setStage(s)}
            className={cn(
              "flex items-center rounded-lg border-2 p-4 transition-all",
              stage === s
                ? "border-primary bg-primary/5 text-primary"
                : "border-border bg-card text-card-foreground hover:border-primary/50"
            )}
          >
            <div className="flex flex-col text-left">
              <span className="font-medium">{s}</span>
            </div>
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
          disabled={!stage}
          className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
