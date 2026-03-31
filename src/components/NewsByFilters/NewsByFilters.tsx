import { useAppDispatch, useAppSelector } from '@/store'
import { useGetNewsFromTopHeadlinesQuery } from '@/store/services/newsApi.ts'
import { setFilters } from '@/store/slices/newsSlice.ts'

import { memo, useEffect } from 'react'

import { useDebounce } from '@/hooks/useDebounce.ts'

import NewsFilters from '../NewsFilters/NewsFilters'
import NewsList from '../NewsList/NewsList'
import Pagination from '../Pagination/Pagination'
import styles from './styles.module.css'

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters)
  const dispatch = useAppDispatch()

  const debouncedKeywords = useDebounce(filters.keywords, 1500)

  const { data, isLoading } = useGetNewsFromTopHeadlinesQuery({
    q: debouncedKeywords,
    pageSize: filters.pageSize,
    page: filters.page,
    category: filters.category,
  })

  const totalPages = Math.ceil((data?.totalResults ?? 0) / filters.pageSize)

  const handleNextPage = (): void => {
    if (filters.page < totalPages) {
      dispatch(setFilters({ key: 'page', value: filters.page + 1 }))
    }
  }

  const handlePreviousPage = (): void => {
    if (filters.page > 1) {
      dispatch(setFilters({ key: 'page', value: filters.page - 1 }))
    }
  }

  const handlePageClick = (pageNumber: number): void => {
    dispatch(setFilters({ key: 'page', value: pageNumber }))
  }

  // ===== Возвращает на начальную страницу при изменении категории или строки поиска =====
  useEffect(() => {
    if (filters.page !== 1) {
      dispatch(setFilters({ key: 'page', value: 1 }))
    }
  }, [filters.category, debouncedKeywords])
  // ======================================================================================

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={filters.page}
      />

      <NewsList isLoading={isLoading} articles={data?.articles} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={filters.page}
      />
    </section>
  )
}

export default memo(NewsByFilters)
