import { ReactElement, cloneElement, useRef } from 'react'

import styles from './styles.module.css'
import { useTheme } from '@/context/ThemeContext.tsx'

interface Props {
  children: ReactElement
  step?: number
}

const Slider = ({ children, step = 150 }: Props) => {
  const { isDark } = useTheme()

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
    <div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
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
