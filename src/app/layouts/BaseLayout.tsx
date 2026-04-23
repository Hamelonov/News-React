import Main from '@/pages/main/ui/Main.tsx'
import Header from '@/widgets/header/ui/Header.tsx'

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  )
}

export default BaseLayout
