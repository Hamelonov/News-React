import styles from './styles.module.css'
import {useEffect, useMemo} from "react"
import {getNews} from "../../api/apiNews"
import Pagination from "../../components/Pagination/Pagination"
import Categories from "../../components/Categories/Categories"
import Search from "../../components/Search/Search"
import {useDebounce} from "../../hooks/useDebounce"
import {PAGE_SIZE, TOTAL_PAGES, CATEGORIES, ENDPOINTS} from "../../constants/constants"
import NewsListWithSkeleton from "../../components/NewsList/NewsList"
import NewsBannerWithSkeleton from "../../components/NewsBanner/NewsBanner"
import {useFetch} from "../../hooks/useFetch"
import {useFilters} from "../../hooks/useFilters.js";

const Main = () => {
  const {filters, changeFilter} = useFilters({
    currentPage: 1,
    pageSize: PAGE_SIZE,
    selectedCategory: CATEGORIES[0],
    keywords: '',
  })

  const debouncedKeywords = useDebounce(filters.keywords, 1500)

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
  const newsList = newsData || []

  // Возвращает на начальную страницу при изменении категории или строки поиска
  useEffect(() => {
    changeFilter('currentPage', 1)
  }, [filters.selectedCategory, debouncedKeywords]);

  const handleNextPage = () => {
    if (filters.currentPage < TOTAL_PAGES) {
      changeFilter('currentPage', filters.currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (filters.currentPage > 1) {
      changeFilter('currentPage', filters.currentPage - 1)
    }
  }

  const handlePageClick = (pageNumber) => {
    changeFilter('currentPage', pageNumber)
  }

  return (
    <div className={styles.main}>
      <Categories
        categories={CATEGORIES}
        selectedCategory={filters.selectedCategory}
        setSelectedCategory={(category) => changeFilter('selectedCategory', category)}
      />

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />

      <NewsBannerWithSkeleton
        isLoading={isLoading}
        item={newsList[0] || null}
      />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.currentPage}
      />

      <NewsListWithSkeleton
        isLoading={isLoading}
        articles={newsList}
      />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.currentPage}
      />
    </div>
  )
}

export default Main