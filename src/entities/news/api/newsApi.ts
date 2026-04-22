import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {
  IEverythingEndpointParams,
  ITopHeadlinesEndpointParams,
  NewsApiResponse,
} from '../model/types'

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
        return {
          url: '/top-headlines',
          params: {
            apiKey: API_KEY,
            ...params,
          },
        }
      },
    }),
    getNewsFromEverything: builder.query<
      NewsApiResponse,
      IEverythingEndpointParams
    >({
      query: (params) => {
        return {
          url: '/everything',
          params: {
            apiKey: API_KEY,
            ...params,
          },
        }
      },
    }),
  }),
})

export const {
  useGetNewsFromTopHeadlinesQuery,
  useGetNewsFromEverythingQuery,
} = newsApi
