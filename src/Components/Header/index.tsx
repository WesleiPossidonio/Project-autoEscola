import { User } from '@phosphor-icons/react'

import Logo from '../../assets/LOGO_MOTOCAR.png'
import { useUser } from '../../Hooks/useUser'
import { ContainerHeader, ContentUser, ImageLogo } from './styled'

export const Header = () => {
  const { userDataLogin } = useUser()
  return (
    <ContainerHeader>
      <ImageLogo src={Logo} />

      <ContentUser>
        <User size={35} />
        <div></div>
        <p>
          Olá, <br /> <strong>{userDataLogin.name}</strong>
        </p>
      </ContentUser>
    </ContainerHeader>
  )
}
