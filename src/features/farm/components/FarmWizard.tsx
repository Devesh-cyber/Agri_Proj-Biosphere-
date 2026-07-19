import * as React from "react";
import { useFarmWizard } from "../hooks/useFarmWizard";
import { useFarmStore } from "../store/farm-store";
import { StepIndicator } from "./StepIndicator";
import { WelcomeStep } from "./WelcomeStep";
import { FarmInfoStep } from "./FarmInfoStep";
import { LocationStep } from "./LocationStep";
import { CropStep } from "./CropStep";
import { GrowthStageStep } from "./GrowthStageStep";
import { SoilStep } from "./SoilStep";
import { IrrigationStep } from "./IrrigationStep";
import { ReviewStep } from "./ReviewStep";
import { useRouter } from "next/navigation";

export function FarmWizard() {
  const { currentStep, totalSteps, formData, updateData, nextStep, prevStep, fullData } = useFarmWizard();
  const { createFarm, activateFarm } = useFarmStore();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const router = useRouter();

  const handleCreateFarm = async () => {
    setIsSubmitting(true);
    try {
      const newFarm = await createFarm(fullData);
      await activateFarm(newFarm.id);
      router.push("/mission-control");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col pt-10">
      {currentStep > 1 && <StepIndicator currentStep={currentStep - 1} totalSteps={totalSteps - 1} />}

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-10">
        {currentStep === 1 && <WelcomeStep onNext={nextStep} />}
        {currentStep === 2 && (
          <FarmInfoStep data={formData} updateData={updateData} onNext={nextStep} onBack={prevStep} />
        )}
        {currentStep === 3 && (
          <LocationStep data={formData} updateData={updateData} onNext={nextStep} onBack={prevStep} />
        )}
        {currentStep === 4 && (
          <CropStep data={formData} updateData={updateData} onNext={nextStep} onBack={prevStep} />
        )}
        {currentStep === 5 && (
          <GrowthStageStep data={formData} updateData={updateData} onNext={nextStep} onBack={prevStep} />
        )}
        {currentStep === 6 && (
          <SoilStep data={formData} updateData={updateData} onNext={nextStep} onBack={prevStep} />
        )}
        {currentStep === 7 && (
          <IrrigationStep data={formData} updateData={updateData} onNext={nextStep} onBack={prevStep} />
        )}
        {currentStep === 8 && (
          <ReviewStep data={fullData} onBack={prevStep} onSubmit={handleCreateFarm} isSubmitting={isSubmitting} />
        )}
      </div>
    </div>
  );
}
