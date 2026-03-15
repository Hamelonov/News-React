import styles from './styles.module.css'
import {TOTAL_PAGES} from "../../constants/constants.js"
import Pagination from "../Pagination/Pagination.jsx"
import NewsList from "../NewsList/NewsList.jsx"
import NewsFilters from "../NewsFilters/NewsFilters.jsx"

const NewsByFilters = ({filters, changeFilter, isLoading, news}) => {
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
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.currentPage}
      />

      <NewsList
        isLoading={isLoading}
        articles={news}
      />

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.currentPage}
      />
    </section>
  )
}

export default NewsByFilters