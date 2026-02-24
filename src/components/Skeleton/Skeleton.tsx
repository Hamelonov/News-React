import styles from './styles.module.css'
import type {FC} from "react";

interface Props {
  count?: number,
  type?: string,
}

const Skeleton:FC<Props> = ({count = 1, type = 'banner'}) => {
  return (
    <>
      {count > 1 ? (
        <div className={styles.list}>
          {[...Array(count)].map((_, index) => (
            <div
              key={index}
              className={type === 'banner' ? styles.banner : styles.item}
            />
          ))}
        </div>
      ) : <div className={type === 'banner' ? styles.banner : styles.item}></div>}
    </>
  )
}

export default Skeleton