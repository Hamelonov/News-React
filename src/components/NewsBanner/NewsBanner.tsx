import styles from './styles.module.css'
import {formatTimeAgo} from "../../helpers/formatTimeAgo"
import Image from "../Image"

const NewsBanner = ({item}: any) => {
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

export default NewsBanner