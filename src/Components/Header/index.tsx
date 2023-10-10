import { List, X } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/LOGO_MOTOCAR.png'
import { useDataStudent } from '../../Hooks/useDataStudents'
import { ContainerHeader, ContentUser, ImageLogo } from './styled'

export const Header = () => {
  const navigate = useNavigate()

  const { menuIsVisible, setMenuIsVisible } = useDataStudent()

  const handleNavigateTohome = () => {
    navigate('/')
  }
  return (
    <ContainerHeader>
      <ImageLogo src={Logo} onClick={() => handleNavigateTohome()} />
      <ContentUser>
        {menuIsVisible === false ? (
          <List
            size={32}
            weight="bold"
            onClick={() => setMenuIsVisible(true)}
          />
        ) : (
          <X size={32} onClick={() => setMenuIsVisible(false)} />
        )}
      </ContentUser>
    </ContainerHeader>
  )
}
