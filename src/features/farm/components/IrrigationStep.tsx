import * as React from "react";
import { FarmFormData } from "../validation/farm.schema";
import { cn } from "@/lib/utils";

const IRRIGATION_TYPES = ["Rainfed", "Drip", "Flood", "Sprinkler", "Canal", "Borewell", "None"];

interface IrrigationStepProps {
  data: Partial<FarmFormData>;
  updateData: (data: Partial<FarmFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function IrrigationStep({ data, updateData, onNext, onBack }: IrrigationStepProps) {
  const [irrigation, setIrrigation] = React.useState(data.irrigation?.type || "None");

  const handleNext = () => {
    updateData({
      irrigation: { type: irrigation === "None" ? null : irrigation },
    });
    onNext();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-foreground">Irrigation Method</h2>
        <p className="mt-1 text-sm text-muted-foreground">How is your farm primarily irrigated?</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {IRRIGATION_TYPES.map((type) => (
          <button
            key={type}
            onClick={() => setIrrigation(type)}
            className={cn(
              "flex h-20 items-center justify-center rounded-xl border-2 transition-all",
              irrigation === type
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
