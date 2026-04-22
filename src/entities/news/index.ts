export { default as NewsBanner } from './ui/banner/Banner'
export { default as NewsBannersList } from './ui/banners-list/BannersList'
export { default as NewsItem } from './ui/item/Item'
export { default as NewsItemsList } from './ui/items-list/ItemsList'

export {
  useGetNewsFromTopHeadlinesQuery,
  useGetNewsFromEverythingQuery,
} from './api/newsApi'

export type {
  INews,
  IEverythingEndpointParams,
  ITopHeadlinesEndpointParams,
  NewsApiResponse,
} from './model/types.ts'
