import { useState } from "react";
import { FarmFormData, farmSchema } from "../validation/farm.schema";

const defaultFormData: Partial<FarmFormData> = {
  name: "",
  size: { value: 0, unit: "Acres" },
  location: undefined,
  crop: undefined,
  soil: { type: "Unknown" },
  irrigation: { type: null },
};

export function useFarmWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FarmFormData>>(defaultFormData);

  const totalSteps = 8; 

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const updateData = (data: Partial<FarmFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const isValid = () => {
    const result = farmSchema.safeParse(formData);
    return result.success;
  };

  return {
    currentStep,
    totalSteps,
    formData,
    nextStep,
    prevStep,
    updateData,
    isValid,
    fullData: formData as FarmFormData,
  };
}
