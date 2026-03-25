import placeholder from '@/assets/placeholder.webp'

import { ImgHTMLAttributes } from 'react'

import styles from './styles.module.css'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
}

const Image = ({ src, ...rest }: Props) => {
  return (
    <div className={styles.wrapper}>
      <img
        {...rest}
        src={src || placeholder}
        alt={rest.alt || 'news'}
        className={styles.image}
        onError={(event) => {
          event.currentTarget.src = placeholder
        }}
      />
    </div>
  )
}

export default Image
