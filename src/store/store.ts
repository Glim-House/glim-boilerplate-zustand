import create from 'zustand'

import { counterSlice } from './slices/counterSlice'

const store = (...a) => ({
  ...counterSlice(...a)
})

export const useStore = create(store)
