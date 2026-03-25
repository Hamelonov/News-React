import {
  IEverythingEndpointParams,
  INews,
  ITopHeadlinesEndpointParams,
  NewsApiResponse,
} from '@/interfaces'
import axios, { AxiosError } from 'axios'

const BASE_URL = import.meta.env.VITE_NEWS_API_BASE_URL
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

const newsAPI = axios.create({
  baseURL: BASE_URL,
  params: {
    apiKey: API_KEY,
  },
})

export const getNews = async (
  endpoint: string,
  params?: IEverythingEndpointParams | ITopHeadlinesEndpointParams,
): Promise<NewsApiResponse> => {
  try {
    const response = await newsAPI.get<NewsApiResponse>(endpoint, { params })

    response.data.articles = response.data.articles?.map((article: INews) => ({
      ...article,
      id: crypto.randomUUID(),
    }))

    return response.data
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>

    console.error(
      `Ошибка при запросе к ${endpoint}:`,
      axiosError.response?.data?.message || axiosError.message,
    )

    return { articles: [], totalResults: 0, status: 'error' }
  }
}
