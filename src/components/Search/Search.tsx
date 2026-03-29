import styles from './style.module.css'
import { useTheme } from '@/context/ThemeContext.tsx'

interface Props {
  keywords: string
  setKeywords: (keywords: string) => void
}

const Search = ({ keywords, setKeywords }: Props) => {
  const { isDark } = useTheme()

  return (
    <div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
      <input
        className={styles.input}
        type="text"
        value={keywords}
        onChange={(event) => setKeywords(event.target.value)}
        placeholder="Search"
      />
    </div>
  )
}

export default Search
