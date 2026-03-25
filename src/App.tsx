import Header from './components/Header/Header.tsx'

import Main from './pages/Main/Main.tsx'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
      </div>
    </>
  )
}

export default App
