import styles from './styles.module.css'
import {CATEGORIES, TOTAL_PAGES} from "../../constants/constants.js"
import Search from "../Search/Search.jsx"
import Categories from "../Categories/Categories.jsx"

const NewsFilters = ({filters, changeFilter}) => {
  return (
    <div className={styles.filters}>
      {CATEGORIES && <Categories
        categories={CATEGORIES}
        selectedCategory={filters.selectedCategory}
        setSelectedCategory={(category) => changeFilter('selectedCategory', category)}
      />}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />
    </div>
  )
}

export default NewsFilters