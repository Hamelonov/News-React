import { INews } from '@/interfaces'

import withSkeleton from '../../helpers/hocs/withSkeleton.tsx'

import NewsItem from '../NewsItem/NewsItem.tsx'
import styles from './styles.module.css'

interface Props {
  articles?: INews[]
}

const NewsList = ({ articles }: Props) => {
  return (
    <ul className={styles.list}>
      {articles?.map((article, index) => (
        <NewsItem key={index} item={article} />
      ))}
    </ul>
  )
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10)

export default NewsListWithSkeleton
