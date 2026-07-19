import { create } from "zustand";
import { Farm, FarmCreate, FarmUpdate } from "../types/farm";
import { farmService } from "../services/farm.service";
import { toast } from "sonner";

interface FarmState {
  farms: Farm[];
  activeFarm: Farm | null;
  loading: boolean;
  initialized: boolean;
  loadFarms: () => Promise<void>;
  createFarm: (farm: FarmCreate) => Promise<Farm>;
  updateFarm: (id: string, farm: FarmUpdate) => Promise<Farm>;
  deleteFarm: (id: string) => Promise<void>;
  activateFarm: (id: string) => Promise<void>;
}

export const useFarmStore = create<FarmState>((set, get) => ({
  farms: [],
  activeFarm: null,
  loading: false,
  initialized: false,

  loadFarms: async () => {
    set({ loading: true });
    try {
      const farms = await farmService.getFarms();
      const active = farms.find((f) => f.isActive) || null;
      set({ farms, activeFarm: active, initialized: true });
    } catch (error) {
      console.error("Failed to load farms", error);
      toast.error("Failed to load farms.");
    } finally {
      set({ loading: false });
    }
  },

  createFarm: async (farmData) => {
    set({ loading: true });
    try {
      const newFarm = await farmService.createFarm(farmData);
      set((state) => ({ farms: [...state.farms, newFarm] }));
      return newFarm;
    } catch (error) {
      console.error("Failed to create farm", error);
      toast.error("Failed to create farm.");
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  updateFarm: async (id, farmData) => {
    set({ loading: true });
    try {
      const updated = await farmService.updateFarm(id, farmData);
      set((state) => ({
        farms: state.farms.map((f) => (f.id === id ? updated : f)),
        activeFarm: state.activeFarm?.id === id ? updated : state.activeFarm,
      }));
      return updated;
    } catch (error) {
      console.error("Failed to update farm", error);
      toast.error("Failed to update farm.");
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  deleteFarm: async (id) => {
    set({ loading: true });
    try {
      await farmService.deleteFarm(id);
      set((state) => ({
        farms: state.farms.filter((f) => f.id !== id),
        activeFarm: state.activeFarm?.id === id ? null : state.activeFarm,
      }));
    } catch (error) {
      console.error("Failed to delete farm", error);
      toast.error("Failed to delete farm.");
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  activateFarm: async (id) => {
    set({ loading: true });
    try {
      const active = await farmService.activateFarm(id);
      set((state) => ({
        farms: state.farms.map((f) => (f.id === id ? active : { ...f, isActive: false })),
        activeFarm: active,
      }));
    } catch (error) {
      console.error("Failed to activate farm", error);
      toast.error("Failed to activate farm.");
      throw error;
    } finally {
      set({ loading: false });
    }
  },
}));
