import { configureStore } from '@reduxjs/toolkit'
import pageReducer from './features/pageSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { imagesApi } from './services/imageApi'

export const store = configureStore({
  reducer: {
    pageReducer,
    [imagesApi.reducerPath]: imagesApi.reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat([imagesApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
