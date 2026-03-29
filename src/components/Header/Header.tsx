import { themeIcons } from '@/assets'
import { useTheme } from '@/context/ThemeContext.tsx'

import { formatDate } from '@/helpers/formatDate'

import styles from './styles.module.css'

const Header = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>News React</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>

      <img
        src={isDark ? themeIcons.dark : themeIcons.light}
        alt="theme"
        width="30"
        height="30"
        loading="lazy"
        onClick={toggleTheme}
      />
    </header>
  )
}

export default Header
