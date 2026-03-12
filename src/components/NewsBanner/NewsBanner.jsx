import styles from './styles.module.css'
import {formatTimeAgo} from "../../helpers/formatTimeAgo"
import Image from "../Image"
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";

const NewsBanner = ({item}) => {
  return (
    <div className={styles.NewsBanner}>
      <Image image={item?.urlToImage} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.publishedAt)} by {item.author}
      </p>
    </div>
  )
}

const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1)

export default NewsBannerWithSkeleton