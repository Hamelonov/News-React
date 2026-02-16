import styles from './styles.module.css'
import NewsItem from "../NewsItem/NewsItem.jsx";

const NewsList = ({articles}) => {
  return (
    <ul className={styles.list}>
      {articles.map(article => (
        <NewsItem key={article.id} item={article} />
      ))}
    </ul>
  )
}

export default NewsList