import styles from './styles.module.css'
import {useEffect, useMemo} from "react"
import {getNews} from "../../api/apiNews"
import {useDebounce} from "../../hooks/useDebounce"
import {PAGE_SIZE, CATEGORIES, ENDPOINTS} from "../../constants/constants"
import {useFetch} from "../../hooks/useFetch"
import {useFilters} from "../../hooks/useFilters.js";
import LatestNews from "../../components/LatestNews/LatestNews.jsx";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters.jsx";

const Main = () => {
  const {filters, changeFilter} = useFilters({
    currentPage: 1,
    pageSize: PAGE_SIZE,
    selectedCategory: CATEGORIES[0],
    keywords: '',
  })

  const debouncedKeywords = useDebounce(filters.keywords, 1500)

  // Возвращает на начальную страницу при изменении категории или строки поиска
  useEffect(() => {
    changeFilter('currentPage', 1)
  }, [filters.selectedCategory, debouncedKeywords]);

  const endpoint = filters.selectedCategory === CATEGORIES[0] ? ENDPOINTS.everything : ENDPOINTS.categories
  const params = useMemo(() => ({
    q: debouncedKeywords,
    page: filters.currentPage,
    pageSize: filters.pageSize,
    language: 'en',
    ...(filters.selectedCategory === CATEGORIES[0]
        ? {sources: 'the-verge'}
        : {category: filters.selectedCategory}
    )
  }), [debouncedKeywords, filters.currentPage, filters.selectedCategory])

  const {data: newsData, isLoading} = useFetch(getNews, endpoint, params)

  return (
    <div className={styles.main}>
      <LatestNews
        isLoading={isLoading}
        banners={newsData}
      />

      <NewsByFilters
        news={newsData}
        isLoading={isLoading}
        filters={filters}
        changeFilter={changeFilter}
      />
    </div>
  )
}

export default Main