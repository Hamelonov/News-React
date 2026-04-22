import { INews } from '@/entities/news'
import Image from '@/shared/ui/image'

import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo.ts'

import styles from './styles.module.css'

interface Props {
  item: INews
}

const Banner = ({ item }: Props) => {
  return (
    <div className={styles.banner}>
      <Image src={item?.urlToImage} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.publishedAt)} by {item.author}
      </p>
    </div>
  )
}

export default Banner
