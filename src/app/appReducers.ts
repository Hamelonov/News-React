import { newsApi } from '@/entities/news/api/newsApi.ts'
import newsReducer from '@/entities/news/model/newsSlice.ts'
import { combineReducers } from '@reduxjs/toolkit'


export const rootReducer = combineReducers({
  news: newsReducer,
  [newsApi.reducerPath]: newsApi.reducer,
})
