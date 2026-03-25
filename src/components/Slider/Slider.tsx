import { ReactElement, cloneElement, useRef } from 'react'

import styles from './styles.module.css'

interface Props {
  children: ReactElement
  step?: number
}

const Slider = ({ children, step = 150 }: Props) => {
  const sliderRef = useRef<HTMLElement | null>(null)

  const scrollLeft = () => {
    if (!sliderRef.current) return
    sliderRef.current.scrollBy({
      left: -step,
      behavior: 'smooth',
    })
  }

  const scrollRight = () => {
    if (!sliderRef.current) return
    sliderRef.current.scrollBy({
      left: +step,
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles.slider}>
      <button onClick={scrollLeft} className={styles.arrow} type="button">
        {'<'}
      </button>
      {cloneElement(children, { ref: sliderRef } as any)}
      <button onClick={scrollRight} className={styles.arrow} type="button">
        {'>'}
      </button>
    </div>
  )
}

export default Slider
