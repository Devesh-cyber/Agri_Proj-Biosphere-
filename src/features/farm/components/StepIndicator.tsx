import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-center space-x-4">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = currentStep > stepNumber;
          const isActive = currentStep === stepNumber;

          return (
            <div key={stepNumber} className="flex items-center">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium transition-colors",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : isCompleted
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-muted bg-background text-muted-foreground"
                )}
              >
                {isCompleted ? <Check className="h-4 w-4" /> : stepNumber}
              </div>
              {stepNumber < totalSteps && (
                <div
                  className={cn(
                    "ml-4 h-0.5 w-8 sm:w-16",
                    isCompleted ? "bg-primary" : "bg-muted"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
