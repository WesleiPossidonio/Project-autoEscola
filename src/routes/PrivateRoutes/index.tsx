// import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { Header } from '../../Components/Header'
import { HeaderMenu } from '../../Components/HeaderMenu'
import { ContentMain } from './styled'

// import { Header } from '../components/header'
// import { MenuMobile } from '../components/MenuMobile'

export const PrivateRoutes = () => {
  // const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)
  const user = localStorage.getItem('autoEscola:userData1.0')
  return user ? (
    <>
      <Header />
      {/* <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      /> */}

      <ContentMain>
        <HeaderMenu />

        <Outlet />
      </ContentMain>
    </>
  ) : (
    <Navigate to="login" />
  )
}
