import { useTheme } from '@/app/providers/ThemeProvider'
import { themeIcons } from '@/shared/assets'

import { formatDate } from '@/shared/helpers/formatDate'

import styles from './styles.module.css'

const Header = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <h1 className={styles.title}>News React</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>

      <img
        className={styles.themeButton}
        src={isDark ? themeIcons.dark : themeIcons.light}
        alt="Toggle theme"
        width="30"
        height="30"
        onClick={toggleTheme}
        loading="lazy"
      />
    </header>
  )
}

export default Header
