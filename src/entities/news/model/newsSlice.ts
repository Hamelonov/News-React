import { IFilters } from '@/shared/types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { CATEGORIES } from '@/shared/constants/constants.ts'

import { INews } from './types.ts'

export interface IState {
  news: INews[]
  filters: IFilters
}

const initialState: IState = {
  news: [],
  filters: {
    pageSize: 10,
    page: 1,
    category: CATEGORIES[0],
    keywords: '',
  },
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload
    },
    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | number | null }>,
    ) => {
      const { key, value } = action.payload
      state.filters = { ...state.filters, [key]: value }
    },
  },
})

export const { setNews, setFilters } = newsSlice.actions

export default newsSlice.reducer
