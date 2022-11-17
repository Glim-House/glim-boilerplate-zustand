import { StateCreator } from 'zustand'

export const counterSlice: StateCreator<any> = set => ({
  count: 1,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 }))
})
