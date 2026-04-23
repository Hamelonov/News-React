import { ThemeProvider } from '@/app/providers/ThemeProvider.tsx'
import { appRouter } from '@/app/providers/appRouter.tsx'
import { store } from '@/app/providers/appStore.ts'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import './styles/globals.css'
import './styles/reset.css'
import './styles/variables.css'

const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  )
}

export default App
