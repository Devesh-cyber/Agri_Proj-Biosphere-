import * as React from "react";
import { FarmFormData } from "../validation/farm.schema";
import { MapPin } from "lucide-react";

interface LocationStepProps {
  data: Partial<FarmFormData>;
  updateData: (data: Partial<FarmFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function LocationStep({ data, updateData, onNext, onBack }: LocationStepProps) {
  const [country, setCountry] = React.useState(data.location?.country || "");
  const [state, setState] = React.useState(data.location?.state || "");
  const [district, setDistrict] = React.useState(data.location?.district || "");
  const [village, setVillage] = React.useState(data.location?.village || "");
  const [latitude, setLatitude] = React.useState(data.location?.latitude?.toString() || "");
  const [longitude, setLongitude] = React.useState(data.location?.longitude?.toString() || "");

  const isValid = country && state && district && village && latitude && longitude;

  const handleNext = () => {
    if (isValid) {
      updateData({
        location: {
          country,
          state,
          district,
          village,
          latitude: Number(latitude),
          longitude: Number(longitude),
        },
      });
      onNext();
    }
  };

  const detectLocation = () => {
    // Mock location detection for now
    setCountry("India");
    setState("Punjab");
    setDistrict("Ludhiana");
    setVillage("Sahnewal");
    setLatitude("30.8415");
    setLongitude("75.9812");
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold text-foreground">Location</h2>
        <p className="mt-1 text-sm text-muted-foreground">Where is your farm located?</p>
      </div>

      <button
        onClick={detectLocation}
        className="flex w-full items-center justify-center gap-2 rounded-md border border-primary bg-primary/5 px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
      >
        <MapPin className="h-4 w-4" />
        Detect Current Location
      </button>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Country *</label>
          <input
            type="text"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">State *</label>
          <input
            type="text"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">District *</label>
          <input
            type="text"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Village *</label>
          <input
            type="text"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={village}
            onChange={(e) => setVillage(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Latitude *</label>
          <input
            type="text"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Longitude *</label>
          <input
            type="text"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
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
