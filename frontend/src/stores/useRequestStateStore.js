import { create } from 'zustand'

export const useRequestStateStore = create((set) => ({
    loading: false,
    setLoading: (newValue) => set({loading: newValue}),
    success: false,
    setSuccess: (newValue) => set({success: newValue}),
    error: false,
    setError: (newValue) => set({error: newValue}),
}))