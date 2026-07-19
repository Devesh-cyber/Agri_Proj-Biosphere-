export interface Location {
  country: string;
  state: string;
  district: string;
  village: string;
  latitude: number;
  longitude: number;
}

export interface Crop {
  name: string;
  growthStage: string;
}

export interface Soil {
  type: string;
}

export interface Irrigation {
  type: string | null;
}

export interface Size {
  value: number;
  unit: string;
}

export interface Farm {
  id: string;
  ownerId: string;
  name: string;
  location: Location;
  crop: Crop;
  soil: Soil;
  irrigation: Irrigation | null;
  size: Size;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export type FarmCreate = Omit<Farm, "id" | "ownerId" | "isActive" | "createdAt" | "updatedAt">;
export type FarmUpdate = Partial<FarmCreate>;
