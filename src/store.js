import { configureStore } from '@reduxjs/toolkit'
import navigationSlice from './store/slices/navigationSlice'
import coinSlice from './store/slices/coinSlice'

export const store = configureStore({
  reducer: {
    navigation: navigationSlice,
    coin: coinSlice
  },
})