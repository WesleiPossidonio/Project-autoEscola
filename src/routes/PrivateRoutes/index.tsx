import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { Header } from '../../Components/Header'
import { HeaderMenu } from '../../Components/HeaderMenu'
import { MenuMobile } from '../../Components/MenuMobile'
import { ContainerMobile, ContentMain } from './styled'

export const PrivateRoutes = () => {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)

  const user = localStorage.getItem('autoEscola:userData1.0')

  console.log(menuIsVisible)
  return user ? (
    <>
      <Header
        setMenuIsVisible={setMenuIsVisible}
        menuIsVisible={menuIsVisible}
      />
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />

      <ContentMain>
        <HeaderMenu />

        <Outlet />
      </ContentMain>

      <ContainerMobile>
        <Outlet />
      </ContainerMobile>
    </>
  ) : (
    <Navigate to="login" />
  )
}
