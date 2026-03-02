import styles from './styles.module.css'

const Categories = ({categories, selectedCategory, setSelectedCategory}) => {
  return (
    <div className={styles.categories}>
      {categories.map(category => (
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
}

export default Categories