import { INews, NewsItem } from '@/entities/news'
import withSkeleton from '@/shared/hocs/withSkeleton.tsx'

import styles from './styles.module.css'

interface Props {
  articles?: INews[]
}

const ItemsList = ({ articles }: Props) => {
  return (
    <ul className={styles.list}>
      {articles?.map((article, index) => (
        <NewsItem key={index} item={article} />
      ))}
    </ul>
  )
}

const NewsListWithSkeleton = withSkeleton<Props>(ItemsList, 'item', 10)

export default NewsListWithSkeleton
