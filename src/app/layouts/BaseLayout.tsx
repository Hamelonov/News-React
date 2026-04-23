import Header from '@/widgets/header/ui/Header.tsx'

import { Outlet } from 'react-router-dom'

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default BaseLayout
