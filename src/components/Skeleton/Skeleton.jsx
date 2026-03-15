import styles from './styles.module.css'

const Skeleton = ({count = 1, type = 'banner', direction = 'column'}) => {
  return (
    <>
      {count > 1 ? (
        <div className={direction === 'column' ? styles.columnList : styles.rowList}>
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