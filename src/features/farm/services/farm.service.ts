import { apiClient } from "@/lib/axios";
import { Farm, FarmCreate, FarmUpdate } from "../types/farm";

export const farmService = {
  createFarm: async (farmData: FarmCreate): Promise<Farm> => {
    const response = await apiClient.post("/farms", farmData);
    return response.data;
  },

  getFarms: async (): Promise<Farm[]> => {
    const response = await apiClient.get("/farms");
    return response.data;
  },

  getFarm: async (id: string): Promise<Farm> => {
    const response = await apiClient.get(`/farms/${id}`);
    return response.data;
  },

  updateFarm: async (id: string, farmData: FarmUpdate): Promise<Farm> => {
    const response = await apiClient.patch(`/farms/${id}`, farmData);
    return response.data;
  },

  deleteFarm: async (id: string): Promise<void> => {
    await apiClient.delete(`/farms/${id}`);
  },

  activateFarm: async (id: string): Promise<Farm> => {
    const response = await apiClient.post(`/farms/${id}/activate`);
    return response.data;
  },
};
