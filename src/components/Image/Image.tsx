import styles from './styles.module.css'

interface Props {
  src: string
}

const Image = ({ src }: Props) => {
  return (
    <div className={styles.wrapper}>
      {src && <img src={src} alt="news" className={styles.image} />}
    </div>
  )
}

export default Image
