import { INews } from '@/interfaces'

import { formatTimeAgo } from '@/helpers/formatTimeAgo.ts'

import Image from '../Image/index.ts'
import styles from './styles.module.css'

interface Props {
  item: INews
}

const NewsBanner = ({ item }: Props) => {
  return (
    <div className={styles.NewsBanner}>
      <Image src={item?.urlToImage} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.publishedAt)} by {item.author}
      </p>
    </div>
  )
}

export default NewsBanner
