import { newsApi } from '@/store/services/newsApi.ts'
import newsReducer from '@/store/slices/newsSlice.ts'
import { configureStore } from '@reduxjs/toolkit'

import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    news: newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
