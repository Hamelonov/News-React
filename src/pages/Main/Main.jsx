import LatestNews from '../../components/LatestNews/LatestNews.jsx'
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters.jsx'

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
