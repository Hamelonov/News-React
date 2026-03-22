import { memo, useEffect, useMemo } from 'react'

import { getNews } from '../../api/apiNews'

import { useDebounce } from '../../hooks/useDebounce'
import { useFetch } from '../../hooks/useFetch'
import { useFilters } from '../../hooks/useFilters'

import { CATEGORIES } from '../../constants/constants'

import NewsFilters from '../NewsFilters/NewsFilters'
import NewsList from '../NewsList/NewsList'
import Pagination from '../Pagination/Pagination'
import styles from './styles.module.css'

const NewsByFilters = () => {
  const { filters, changeFilter } = useFilters({
    currentPage: 1,
    currentCategory: CATEGORIES[0],
    keywords: '',
  })

  const debouncedKeywords = useDebounce(filters.keywords, 1500)

  // Возвращает на начальную страницу при изменении категории или строки поиска
  useEffect(() => {
    if (filters.currentPage !== 1) {
      changeFilter('currentPage', 1)
    }
  }, [filters.currentCategory, debouncedKeywords])

  const { data, isLoading } = useFetch(
    getNews,
    '/top-headlines',
    useMemo(() => {
      return {
        q: debouncedKeywords,
        page: filters.currentPage,
        pageSize: 10,
        category: filters.currentCategory,
      }
    }, [debouncedKeywords, filters.currentPage, filters.currentCategory]),
  )

  const handleNextPage = () => {
    if (filters.currentPage < 10) {
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
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={10}
        currentPage={filters.currentPage}
      />

      <NewsList isLoading={isLoading} articles={data} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={10}
        currentPage={filters.currentPage}
      />
    </section>
  )
}

export default memo(NewsByFilters)
