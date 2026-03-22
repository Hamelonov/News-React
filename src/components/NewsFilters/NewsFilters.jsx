import { CATEGORIES } from '../../constants/constants.js'

import Categories from '../Categories/Categories.jsx'
import Search from '../Search/Search.jsx'
import Slider from '../Slider/Slider.jsx'
import styles from './styles.module.css'

const NewsFilters = ({ filters, changeFilter }) => {
  return (
    <div className={styles.filters}>
      {CATEGORIES && (
        <Slider>
          <Categories
            categories={CATEGORIES}
            selectedCategory={filters.currentCategory}
            setSelectedCategory={(category) =>
              changeFilter('currentCategory', category)
            }
          />
        </Slider>
      )}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter('keywords', keywords)}
      />
    </div>
  )
}

export default NewsFilters
