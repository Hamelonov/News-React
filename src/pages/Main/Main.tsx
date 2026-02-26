import styles from './styles.module.css'
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import {useEffect, useState} from "react"
import {getNews} from "../../api/apiNews"
import NewsList from "../../components/NewsList/NewsList"
import Skeleton from "../../components/Skeleton/Skeleton"
import Pagination from "../../components/Pagination/Pagination";

const Main = () => {
  const [newsList, setNewsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages: number = 10
  const pageSize: number = 10

  const fetchNews = async (currentPage: number) => {
    try {
      setIsLoading(true)

      const newsData = await getNews(currentPage, pageSize)
      setNewsList(newsData)

      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchNews(currentPage)
  }, [currentPage])

  const handleNextPage = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handlePageClick = (pageNumber: number): void => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className={styles.main}>
      {newsList.length > 0 && !isLoading
        ? <NewsBanner item={newsList[1]} />
        : <Skeleton
          count={1}
          type='banner'
        />}

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />

      {!isLoading
        ? <NewsList articles={newsList} />
        : <Skeleton
          count={10}
          type='item'
        />}

      <Pagination
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        totalPages={totalPages}
        currentPage={currentPage}
      />
    </div>
  )
}

export default Main