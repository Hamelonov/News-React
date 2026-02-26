import {createRoot} from 'react-dom/client'
import './reset.css'
import './globals.css'
import App from "./App";

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Не удалось найти корневой элемент "root". Проверьте index.html')
}

createRoot(rootElement).render(<App />)
