import { forwardRef } from 'react'

import styles from './styles.module.css'

const Categories = forwardRef(
  ({ categories, selectedCategory, setSelectedCategory }, ref) => {
    return (
      <div ref={ref} className={styles.categories}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.item} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>
    )
  },
)

export default Categories
