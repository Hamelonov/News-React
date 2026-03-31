import { ThemeProvider } from '@/context/ThemeContext.tsx'
import { store } from '@/store'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

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
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
)
