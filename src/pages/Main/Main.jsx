import styles from './styles.module.css'
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {useEffect, useState} from "react";
import {getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";

const Main = () => {
  const [newsList, setNewsList] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNews()
        setNewsList(newsData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchNews()
  }, []);
  return (
    <div className={styles.main}>
      {newsList.length > 0 ? <NewsBanner item={newsList[3]} /> : null}

      <NewsList articles={newsList} />
    </div>
  )
}

export default Main