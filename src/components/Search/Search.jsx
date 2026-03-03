import styles from './style.module.css'

const Search = ({keywords, setKeywords}) => {
  return (
    <div className={styles.search}>
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