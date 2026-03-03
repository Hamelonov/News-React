import styles from './styles.module.css'
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx"
import {useEffect, useState} from "react"
import {getNews} from "../../api/apiNews.js"
import NewsList from "../../components/NewsList/NewsList.jsx"
import Skeleton from "../../components/Skeleton/Skeleton.jsx"
import Pagination from "../../components/Pagination/Pagination.jsx"
import Categories from "../../components/Categories/Categories.jsx"
import Search from "../../components/Search/Search.jsx"
import {useDebounce} from "../../hooks/useDebounce.js";

const Main = () => {
  const [newsList, setNewsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [keywords, setKeywords] = useState('')
  // Сколько запросить статей при начальной загрузки приложения
  const totalPages = 10
  const pageSize = 10

  const CATEGORIES = [
    "all",
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ]

  const debouncedKeywords = useDebounce(keywords, 1500)

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true)
      let newsData = []

      if (selectedCategory === 'all') {
        newsData = await getNews('/everything', {
          sources: 'the-verge',
          q: keywords,
          page: 1,
          pageSize: pageSize,
        })
      } else {
        newsData = await getNews('/top-headlines', {
          category: selectedCategory,
          language: 'en',
          q: keywords,
          page: 1,
          pageSize: pageSize,
        })
      }

      setNewsList(newsData)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchNews(currentPage)
  }, [currentPage, selectedCategory, debouncedKeywords])

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className={styles.main}>
      <Categories
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Search
        keywords={keywords}
        setKeywords={setKeywords}
      />

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