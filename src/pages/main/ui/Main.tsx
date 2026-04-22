import LatestNews from '@/widgets/latest-news'
import NewsByFilters from '@/widgets/news-by-filters'

import styles from './styles.module.css'

const Main = () => {
  return (
    <div className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </div>
  )
}

export default Main
