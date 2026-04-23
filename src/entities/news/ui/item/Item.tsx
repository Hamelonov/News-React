import { INews } from '@/entities/news'
import Image from '@/shared/ui/image'

import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo.ts'

import styles from './styles.module.css'

interface Props {
  item: INews
}

const Item = ({ item }: Props) => {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <Image src={item.urlToImage} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.publishedAt)} by {item.author}
        </p>
      </div>
    </li>
  )
}

export default Item
