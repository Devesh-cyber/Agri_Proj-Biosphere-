import { z } from "zod";

export const locationSchema = z.object({
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  district: z.string().min(1, "District is required"),
  village: z.string().min(1, "Village is required"),
  latitude: z.number(),
  longitude: z.number(),
});

export const cropSchema = z.object({
  name: z.string().min(1, "Crop is required"),
  growthStage: z.string().min(1, "Growth stage is required"),
});

export const soilSchema = z.object({
  type: z.string().default("Unknown"),
});

export const irrigationSchema = z.object({
  type: z.string().nullable().default(null),
});

export const sizeSchema = z.object({
  value: z.number().positive("Size must be positive"),
  unit: z.enum(["Acres", "Hectares"]).default("Acres"),
});

export const farmSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters").max(50, "Name must be max 50 characters"),
  location: locationSchema,
  crop: cropSchema,
  soil: soilSchema,
  irrigation: irrigationSchema.nullable(),
  size: sizeSchema,
});

export type FarmFormData = z.infer<typeof farmSchema>;
