import * as React from "react";
import { Leaf } from "lucide-react";

interface WelcomeStepProps {
  onNext: () => void;
}

export function WelcomeStep({ onNext }: WelcomeStepProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Leaf className="h-8 w-8" />
      </div>
      <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground">
        Welcome to BioSphere AI
      </h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        To generate precise, biological-first recommendations for your crops, we need to understand the unique characteristics of your farm. This will only take a minute.
      </p>
      <button
        onClick={onNext}
        className="rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
      >
        Start Setup
      </button>
    </div>
  );
}
