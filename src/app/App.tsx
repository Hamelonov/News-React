import { store } from '@/app/appStore.ts'
import BaseLayout from '@/app/layouts/BaseLayout.tsx'
import { ThemeProvider } from '@/app/providers/ThemeProvider.tsx'

import { Provider } from 'react-redux'

import './styles/globals.css'
import './styles/reset.css'
import './styles/variables.css'

const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  )
}

export default App
