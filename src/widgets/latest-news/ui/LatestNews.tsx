import { NewsBannersList, useGetNewsFromEverythingQuery } from '@/entities/news'

import { memo } from 'react'

import styles from './styles.module.css'

const LatestNews = () => {
  const { data, isLoading } = useGetNewsFromEverythingQuery({
    q: 'world',
    pageSize: 20,
    sortBy: 'publishedAt',
  })

  return (
    <section className={styles.section}>
      <NewsBannersList banners={data?.articles} isLoading={isLoading} />
    </section>
  )
}

export default memo(LatestNews)
