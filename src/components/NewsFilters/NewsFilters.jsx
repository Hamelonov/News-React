import styles from './styles.module.css'
import {CATEGORIES} from "../../constants/constants.js"
import Search from "../Search/Search.jsx"
import Categories from "../Categories/Categories.jsx"

const NewsFilters = ({filters, changeFilter}) => {
  return (
    <div className={styles.filters}>
      {CATEGORIES && <Categories
        categories={CATEGORIES}
        selectedCategory={filters.currentCategory}
        setSelectedCategory={(category) => changeFilter('currentCategory', category)}
      />}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />
    </div>
  )
}

export default NewsFilters