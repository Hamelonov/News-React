import { CategoriesType } from '@/shared/types'

import { ForwardedRef, forwardRef } from 'react'

import styles from './styles.module.css'

interface Props {
  categories: CategoriesType[]
  selectedCategory: CategoriesType | null
  setSelectedCategory: (category: CategoriesType | null) => void
}

const Categories = forwardRef(
  (
    { categories, selectedCategory, setSelectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div ref={ref} className={styles.categories}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.item} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category)}
            type="button"
            disabled={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
    )
  },
)

export default Categories
