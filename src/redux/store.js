import { configureStore } from '@reduxjs/toolkit'
import {apiSlice, newsReducer} from './api/api'

export const store = configureStore({
  reducer: {[apiSlice.reducerPath]: apiSlice.reducer},
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)

})


