import styles from './styles.module.css'
import {formatTimeAgo} from "../../helpers/formatTimeAgo.js";
import Image from "../Image/index.js";

const NewsBanner = ({item}) => {
  return (
    <div className={styles.NewsBanner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  )
}

export default NewsBanner