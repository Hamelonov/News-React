import { ITopHeadlinesEndpointParams, NewsApiResponse } from '@/interfaces'

import { memo, useEffect, useMemo } from 'react'

import { getNews } from '@/api/apiNews.ts'

import { useDebounce } from '@/hooks/useDebounce.ts'
import { useFetch } from '@/hooks/useFetch.ts'
import { useFilters } from '@/hooks/useFilters.ts'

import { CATEGORIES, PAGE_SIZE } from '@/constants/constants.ts'

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

  const { data, isLoading } = useFetch<
    NewsApiResponse,
    ITopHeadlinesEndpointParams
  >(
    getNews,
    '/top-headlines',
    useMemo((): ITopHeadlinesEndpointParams => {
      return {
        q: debouncedKeywords,
        pageSize: PAGE_SIZE,
        page: filters.currentPage,
        category: filters.currentCategory,
      }
    }, [debouncedKeywords, filters.currentPage, filters.currentCategory]),
  )

  const totalPages = Math.ceil((data?.totalResults ?? 0) / PAGE_SIZE)

  const handleNextPage = (): void => {
    if (filters.currentPage < totalPages) {
      changeFilter('currentPage', filters.currentPage + 1)
    }
  }

  const handlePreviousPage = (): void => {
    if (filters.currentPage > 1) {
      changeFilter('currentPage', filters.currentPage - 1)
    }
  }

  const handlePageClick = (pageNumber: number): void => {
    changeFilter('currentPage', pageNumber)
  }

  // ===== Возвращает на начальную страницу при изменении категории или строки поиска =====
  useEffect(() => {
    if (filters.currentPage !== 1) {
      changeFilter('currentPage', 1)
    }
  }, [filters.currentCategory, debouncedKeywords])

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={filters.currentPage}
      />

      <NewsList isLoading={isLoading} articles={data?.articles} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={filters.currentPage}
      />
    </section>
  )
}

export default memo(NewsByFilters)
