import { configureStore } from '@reduxjs/toolkit'
import setMovieData from './MovieSlice'

export const store = configureStore({
  reducer: {
    movie : setMovieData,
  },
})