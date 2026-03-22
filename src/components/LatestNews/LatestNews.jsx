import { memo } from 'react'

import { getNews } from '../../api/apiNews'

import { useFetch } from '../../hooks/useFetch'

import BannersList from '../BannersList/BannersList'
import styles from './styles.module.css'

const params = {
  q: 'world',
  pageSize: 20,
  sortBy: 'publishedAt',
}

const LatestNews = () => {
  const { data, isLoading } = useFetch(getNews, '/everything', params)

  return (
    <section className={styles.section}>
      <BannersList banners={data} isLoading={isLoading} />
    </section>
  )
}

export default memo(LatestNews)
