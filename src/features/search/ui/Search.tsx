import styles from './style.module.css'

interface Props {
  keywords: string
  setKeywords: (keywords: string) => void
}

const Search = ({ keywords, setKeywords }: Props) => {
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        type="text"
        value={keywords}
        onChange={(event) => setKeywords(event.target.value)}
        placeholder="Search..."
      />
    </div>
  )
}

export default Search
