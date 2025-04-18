import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the store state interface
interface StoreState {
  // Add your state properties here
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// Create the store
export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      // Initial state
      count: 0,

      // Actions
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: "app-storage", // unique name for localStorage
    }
  )
);

export * from "./authStore";
