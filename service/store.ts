import { create } from 'zustand';

const useStore = create((set) => ({
  isClick: false,
  setIsClick: (value:boolean) => set({ isClick: value }),
}));

export default useStore;