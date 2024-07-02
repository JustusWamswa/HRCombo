import { create } from 'zustand'

export const useNavStore = create((set) => ({
    navValue: 0,
    setNavValue: (newValue) => set({navValue: newValue}),
}))