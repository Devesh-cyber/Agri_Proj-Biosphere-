import * as React from "react";
import { FarmFormData } from "../validation/farm.schema";
import { Loader2 } from "lucide-react";

interface ReviewStepProps {
  data: FarmFormData;
  onBack: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export function ReviewStep({ data, onBack, onSubmit, isSubmitting }: ReviewStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-foreground">Review & Create</h2>
        <p className="mt-1 text-sm text-muted-foreground">Please verify your farm information.</p>
      </div>

      <div className="space-y-6 rounded-lg border border-border bg-card p-6">
        <div className="grid grid-cols-2 gap-y-4 text-sm">
          <div>
            <span className="text-muted-foreground">Farm Name</span>
            <p className="font-medium text-foreground">{data.name}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Size</span>
            <p className="font-medium text-foreground">{data.size.value} {data.size.unit}</p>
          </div>
          
          <div>
            <span className="text-muted-foreground">Crop</span>
            <p className="font-medium text-foreground">{data.crop.name}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Growth Stage</span>
            <p className="font-medium text-foreground">{data.crop.growthStage}</p>
          </div>

          <div>
            <span className="text-muted-foreground">Soil Type</span>
            <p className="font-medium text-foreground">{data.soil.type}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Irrigation</span>
            <p className="font-medium text-foreground">{data.irrigation?.type || "None"}</p>
          </div>
        </div>

        <div className="border-t border-border pt-4 text-sm">
          <span className="text-muted-foreground">Location</span>
          <p className="mt-1 font-medium text-foreground">
            {data.location.village}, {data.location.district}, {data.location.state}, {data.location.country}
          </p>
          <p className="text-xs text-muted-foreground">
            Coordinates: {data.location.latitude}, {data.location.longitude}
          </p>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          onClick={onBack}
          disabled={isSubmitting}
          className="rounded-md border border-input bg-background px-6 py-2 text-sm font-medium text-foreground hover:bg-muted disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={onSubmit}
          disabled={isSubmitting}
          className="inline-flex items-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create Farm
        </button>
      </div>
    </div>
  );
}
