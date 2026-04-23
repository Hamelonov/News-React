import {
  CategoriesType,
  LanguageCodeType,
  SearchInType,
  SortByType,
} from '@/shared/types'

export interface INews {
  id: string
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface IEverythingEndpointParams {
  q?: string
  searchIn?: SearchInType
  domains?: string
  from?: string
  to?: string
  language?: LanguageCodeType
  sortBy?: SortByType
  pageSize?: number
  page?: number
}

export interface ITopHeadlinesEndpointParams {
  country?: string
  category?: CategoriesType | null
  sources?: string
  q?: string
  pageSize?: number
  page?: number
}

export interface NewsApiResponse {
  articles: INews[]
  totalResults: number
  status: string
}
