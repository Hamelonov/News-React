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

export interface IFilters {
  currentPage: number
  pageSize?: number
  currentCategory: CategoriesType | null
  keywords: string
}

export interface IEverythingEndpointParams {
  q?: string
  searchIn?: SearchInType
  domains?: string
  from?: string
  to?: string
  language?: LanguageCodeType
  sortBy?: SortByType
  pageSize: number
  page?: number
}

export interface ITopHeadlinesEndpointParams {
  country?: string
  category?: CategoriesType | null
  sources?: string
  q?: string
  pageSize: number
  page?: number
}

export interface NewsApiResponse {
  articles: INews[]
  totalResults: number
  status: string
}

export type SortByType = 'relevancy' | 'popularity' | 'publishedAt'
export type SearchInType = 'title' | 'description' | 'content'
export type SkeletonType = 'banner' | 'item'
export type DirectionType = 'row' | 'column'

export type CategoriesType =
  | 'general'
  | 'business'
  | 'entertainment'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology'

export type LanguageCodeType =
  | 'ar'
  | 'de'
  | 'en'
  | 'es'
  | 'fr'
  | 'he'
  | 'it'
  | 'nl'
  | 'no'
  | 'pt'
  | 'ru'
  | 'sv'
  | 'ud'
  | 'zh'

export type CountryCodeType =
  | 'ae'
  | 'ar'
  | 'at'
  | 'au'
  | 'be'
  | 'bg'
  | 'br'
  | 'ca'
  | 'ch'
  | 'cn'
  | 'co'
  | 'cu'
  | 'cz'
  | 'de'
  | 'eg'
  | 'fr'
  | 'gb'
  | 'gr'
  | 'hk'
  | 'hu'
  | 'id'
  | 'ie'
  | 'il'
  | 'in'
  | 'it'
  | 'jp'
  | 'kr'
  | 'lt'
  | 'lv'
  | 'ma'
  | 'mx'
  | 'my'
  | 'ng'
  | 'nl'
  | 'no'
  | 'nz'
  | 'ph'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'rs'
  | 'ru'
  | 'sa'
  | 'se'
  | 'sg'
  | 'si'
  | 'sk'
  | 'th'
  | 'tr'
  | 'tw'
  | 'ua'
  | 'us'
  | 've'
  | 'za'
