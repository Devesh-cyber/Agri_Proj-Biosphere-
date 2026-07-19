import * as React from "react";
import { FarmFormData } from "../validation/farm.schema";

interface FarmInfoStepProps {
  data: Partial<FarmFormData>;
  updateData: (data: Partial<FarmFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function FarmInfoStep({ data, updateData, onNext, onBack }: FarmInfoStepProps) {
  const [name, setName] = React.useState(data.name || "");
  const [sizeValue, setSizeValue] = React.useState(data.size?.value?.toString() || "");
  const [sizeUnit, setSizeUnit] = React.useState<"Acres" | "Hectares">(data.size?.unit || "Acres");

  const isValid = name.length >= 3 && name.length <= 50 && Number(sizeValue) > 0;

  const handleNext = () => {
    if (isValid) {
      updateData({
        name,
        size: { value: Number(sizeValue), unit: sizeUnit },
      });
      onNext();
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-foreground">Farm Information</h2>
        <p className="mt-1 text-sm text-muted-foreground">Give your farm a name and specify its size.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Farm Name *</label>
          <input
            type="text"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="e.g. Green Valley Farm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Farm Size *</label>
          <div className="flex gap-4">
            <input
              type="number"
              className="flex h-10 flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="0.0"
              value={sizeValue}
              onChange={(e) => setSizeValue(e.target.value)}
            />
            <select
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              value={sizeUnit}
              onChange={(e) => setSizeUnit(e.target.value as "Acres" | "Hectares")}
            >
              <option value="Acres">Acres</option>
              <option value="Hectares">Hectares</option>
            </select>
          </div>
        </div>
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
          disabled={!isValid}
          className="rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
