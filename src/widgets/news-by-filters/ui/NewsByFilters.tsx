import { useAppDispatch, useAppSelector } from '@/app/providers/appStore.ts'
import { NewsItemsList, useGetNewsFromTopHeadlinesQuery } from '@/entities/news'
import { setFilters } from '@/entities/news/model/newsSlice.ts'
import Search from '@/features/search'
import Pagination from '@/shared/ui/pagination/Pagination.tsx'
import Slider from '@/shared/ui/slider/Slider.tsx'

import { memo, useEffect } from 'react'

import { useDebounce } from '@/shared/hooks/useDebounce.ts'

import { CATEGORIES } from '@/shared/constants/constants.ts'

import Categories from './categories'
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
      <div className={styles.filters}>
        {CATEGORIES && (
          <Slider>
            <Categories
              categories={CATEGORIES}
              selectedCategory={filters.category}
              setSelectedCategory={(category) =>
                dispatch(setFilters({ key: 'category', value: category }))
              }
            />
          </Slider>
        )}

        <Search
          keywords={filters.keywords}
          setKeywords={(keywords) =>
            dispatch(setFilters({ key: 'keywords', value: keywords }))
          }
        />
      </div>

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={filters.page}
      />

      <NewsItemsList isLoading={isLoading} articles={data?.articles} />

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
