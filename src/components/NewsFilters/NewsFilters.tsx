import { IFilters } from '@/interfaces'

import { CATEGORIES } from '@/constants/constants.ts'

import Categories from '../Categories/Categories.tsx'
import Search from '../Search/Search.tsx'
import Slider from '../Slider/Slider.tsx'
import styles from './styles.module.css'

interface Props {
  filters: IFilters
  changeFilter: (key: string, value: string | number | null) => void
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
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
