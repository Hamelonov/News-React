import { INews, NewsBanner } from '@/entities/news'
import withSkeleton from '@/shared/hocs/withSkeleton.tsx'

import styles from './styles.module.css'

interface Props {
  banners?: INews[] | null
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner, index) => (
        <NewsBanner key={index} item={banner} />
      ))}
    </ul>
  )
}

const BannersListWithSkeleton = withSkeleton<Props>(
  BannersList,
  'banner',
  10,
  'row',
)

export default BannersListWithSkeleton
