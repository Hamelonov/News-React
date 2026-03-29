import { ThemeProvider } from '@/context/ThemeContext.tsx'

import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './globals.css'
import './reset.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error(
    'Не удалось найти корневой элемент "root". Проверьте index.html',
  )
}

createRoot(rootElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
)
