import { Navigate, Outlet } from 'react-router-dom'

import { Header } from '../../Components/Header'
import { HeaderMenu } from '../../Components/HeaderMenu'
import { MenuMobile } from '../../Components/MenuMobile'
import { useDataStudent } from '../../Hooks/useDataStudents'
import { ContainerMobile, ContentMain } from './styled'

export const PrivateRoutes = () => {
  const user = localStorage.getItem('autoEscola:userData1.0')

  const { menuIsVisible } = useDataStudent()

  return user ? (
    <>
      <Header />
      <MenuMobile />

      <ContentMain menuIsVisible={menuIsVisible}>
        {menuIsVisible === true && <HeaderMenu />}

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
