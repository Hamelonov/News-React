import styles from './styles.module.css'

interface Props {
  currentPage: number
  totalPages: number
  handleNextPage: () => void
  handlePreviousPage: () => void
  handlePageClick: (page: number) => void
}

const getVisiblePages = (current: number, total: number) => {
  if (total <= 7) return [...Array(total)].map((_, i) => i + 1)

  if (current <= 4) {
    return [1, 2, 3, 4, 5, '...', total]
  }

  if (current >= total - 3) {
    return [1, '...', total - 4, total - 3, total - 2, total - 1, total]
  }

  return [1, '...', current - 1, current, current + 1, '...', total]
}

const Pagination = ({
  currentPage,
  totalPages,
  handleNextPage,
  handlePreviousPage,
  handlePageClick,
}: Props) => {
  const pages = getVisiblePages(currentPage, totalPages)

  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}
        className={styles.arrow}
        type="button"
      >
        {'<'}
      </button>
      <div className={styles.list}>
        {pages.map((page, index) => {
          if (page === '...') {
            return <span key={`dots-${index}`}>...</span>
          }

          return (
            <button
              key={page}
              onClick={() => handlePageClick(page as number)}
              className={styles.pageNumber}
              disabled={page === currentPage}
            >
              {page}
            </button>
          )
        })}
      </div>
      <button
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
        className={styles.arrow}
        type="button"
      >
        {'>'}
      </button>
    </div>
  )
}

export default Pagination
