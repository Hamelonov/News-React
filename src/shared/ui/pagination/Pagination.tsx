import styles from './styles.module.css'

interface Props {
  currentPage: number
  totalPages: number
  handleNextPage: () => void
  handlePreviousPage: () => void
  handlePageClick: (page: number) => void
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
    <nav className={styles.pagination}>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}
        className={styles.arrow}
        type="button"
        aria-label="Previous page"
      >
        {'<'}
      </button>
      <div className={styles.list}>
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`dots-${index}`} className={styles.dots}>
                ...
              </span>
            )
          }

          return (
            <button
              key={page}
              onClick={() => handlePageClick(page as number)}
              className={`${styles.pageNumber} ${page === currentPage ? styles.active : ''}`}
              disabled={page === currentPage}
              type="button"
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
        aria-label="Next page"
      >
        {'>'}
      </button>
    </nav>
  )
}

const getVisiblePages = (current: number, total: number) => {
  if (total <= 7) return [...Array(total)].map((_, i) => i + 1)
  if (current <= 4) return [1, 2, 3, 4, 5, '...', total]
  if (current >= total - 3)
    return [1, '...', total - 4, total - 3, total - 2, total - 1, total]
  return [1, '...', current - 1, current, current + 1, '...', total]
}

export default Pagination
