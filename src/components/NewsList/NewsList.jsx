import styles from './styles.module.css'
import NewsItem from "../NewsItem/NewsItem"
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";

const NewsList = ({articles}) => {
  return (
    <ul className={styles.list}>
      {articles.map(article => (
        <NewsItem
          key={article.id}
          item={article}
        />
      ))}
    </ul>
  )
}

const NewsListWithSkeleton = withSkeleton(NewsList, "item", 10)

export default NewsListWithSkeleton