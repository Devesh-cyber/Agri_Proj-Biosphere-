import { create } from "zustand";

interface AppState {
  sidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
  // Further state will be added per feature
}

export const useAppStore = create<AppState>((set) => ({
  sidebarOpen: true,
  setSidebarOpen: (isOpen) => set({ sidebarOpen: isOpen }),
}));
