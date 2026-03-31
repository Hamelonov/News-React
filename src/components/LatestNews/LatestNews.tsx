import { useGetNewsFromEverythingQuery } from '@/store/services/newsApi.ts'

import { memo } from 'react'

import BannersList from '../BannersList/BannersList.tsx'
import styles from './styles.module.css'

const LatestNews = () => {
  const { data, isLoading } = useGetNewsFromEverythingQuery({
    q: 'world',
    pageSize: 20,
    sortBy: 'publishedAt',
  })

  return (
    <section className={styles.section}>
      <BannersList banners={data?.articles} isLoading={isLoading} />
    </section>
  )
}

export default memo(LatestNews)
