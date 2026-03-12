import styles from './styles.module.css'

const Pagination = (
  {
    currentPage,
    totalPages,
    handleNextPage,
    handlePreviousPage,
    handlePageClick
  }
) => {
  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}
        className={styles.arrow}
        type="button"
      >{'<'}</button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            onClick={() => handlePageClick(index + 1)}
            className={styles.pageNumber}
            disabled={index + 1 === currentPage}
            key={index}
            type="button"
          >{index + 1}</button>
        ))}
      </div>
      <button
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
        className={styles.arrow}
        type="button"
      >{'>'}</button>
    </div>
  )
}

export default Pagination