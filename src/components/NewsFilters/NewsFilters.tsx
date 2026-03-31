import { IFilters } from '@/interfaces'
import { useAppDispatch } from '@/store'
import { setFilters } from '@/store/slices/newsSlice.ts'

import { CATEGORIES } from '@/constants/constants.ts'

import Categories from '../Categories/Categories.tsx'
import Search from '../Search/Search.tsx'
import Slider from '../Slider/Slider.tsx'
import styles from './styles.module.css'

interface Props {
  filters: IFilters
}

const NewsFilters = ({ filters }: Props) => {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.filters}>
      {CATEGORIES && (
        <Slider>
          <Categories
            categories={CATEGORIES}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: 'category', value: category }))
            }
          />
        </Slider>
      )}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: 'keywords', value: keywords }))
        }
      />
    </div>
  )
}

export default NewsFilters
