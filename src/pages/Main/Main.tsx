import styles from './styles.module.css'
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import {useEffect, useState} from "react"
import {getNews} from "../../api/apiNews"
import NewsList from "../../components/NewsList/NewsList"
import Skeleton from "../../components/Skeleton/Skeleton"

const Main = () => {
  const [newsList, setNewsList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true)
        const newsData = await getNews()
        setNewsList(newsData)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    fetchNews()
  }, []);
  return (
    <div className={styles.main}>
      {newsList.length > 0 && !isLoading
        ? <NewsBanner item={newsList[3]} />
        : <Skeleton
          count={1}
          type='banner'
        />}

      {!isLoading
        ? <NewsList articles={newsList} />
        : <Skeleton
          count={10}
          type='item'
        />}
    </div>
  )
}

export default Main