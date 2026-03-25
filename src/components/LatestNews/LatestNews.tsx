import { NewsApiResponse } from '@/interfaces'

import { memo } from 'react'

import { getNews } from '@/api/apiNews.ts'

import { useFetch } from '@/hooks/useFetch.ts'

import BannersList from '../BannersList/BannersList.tsx'
import styles from './styles.module.css'

// вынесено за пределы компонента чтобы при ререндере не менялось ссылка на обьект
// и не вызывался повторно запрос на получение новостей
const params = {
  q: 'world',
  pageSize: 20,
  sortBy: 'publishedAt',
}

type ParamsType = typeof params

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(
    getNews,
    '/everything',
    params,
  )

  return (
    <section className={styles.section}>
      <BannersList banners={data?.articles} isLoading={isLoading} />
    </section>
  )
}

export default memo(LatestNews)
