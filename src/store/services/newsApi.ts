import {
  IEverythingEndpointParams,
  ITopHeadlinesEndpointParams,
  NewsApiResponse,
} from '@/interfaces'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNewsFromTopHeadlines: builder.query<
      NewsApiResponse,
      ITopHeadlinesEndpointParams
    >({
      keepUnusedDataFor: 0,
      query: (params) => {
        const { q, pageSize, page, category } = params || {}
        return {
          url: '/top-headlines',
          params: {
            apiKey: API_KEY,
            q,
            pageSize,
            page,
            category,
          },
        }
      },
    }),
    getNewsFromEverything: builder.query<
      NewsApiResponse,
      IEverythingEndpointParams
    >({
      query: (params) => {
        const { q, pageSize, sortBy } = params || {}
        return {
          url: '/everything',
          params: {
            apiKey: API_KEY,
            q,
            pageSize,
            sortBy,
          },
        }
      },
    }),
  }),
})

export const { useGetNewsFromTopHeadlinesQuery } = newsApi
export const { useGetNewsFromEverythingQuery } = newsApi
