import { useTheme } from '@/context/ThemeContext.tsx'

import Header from './components/Header/Header.tsx'

import Main from './pages/Main/Main.tsx'

const App = () => {
  const { isDark } = useTheme()

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  )
}

export default App
