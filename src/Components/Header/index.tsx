import { User } from '@phosphor-icons/react'
import { List, X } from 'phosphor-react'
import { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/LOGO_MOTOCAR.png'
import { useUser } from '../../Hooks/useUser'
import { TextRegular } from '../typography'
import {
  ContainerHeader,
  ContainerLogin,
  ContentLoginData,
  ContentUser,
  ImageLogo,
  Line,
} from './styled'

interface HeaderProps {
  setMenuIsVisible: Dispatch<SetStateAction<boolean>>
  menuIsVisible: boolean
}

export const Header = ({ setMenuIsVisible, menuIsVisible }: HeaderProps) => {
  const { userDataLogin } = useUser()
  const navigate = useNavigate()

  const handleGoOut = () => {
    localStorage.removeItem('cartorio:userData1.0')
    navigate('/login')
  }

  const handleNavigateTohome = () => {
    navigate('/')
  }
  return (
    <ContainerHeader>
      <ImageLogo src={Logo} onClick={() => handleNavigateTohome()} />

      <ContentUser>
        <div>
          <User size={35} />
          <Line />

          <ContentLoginData>
            <ContainerLogin>
              <TextRegular>Olá,</TextRegular>
              <TextRegular
                color="red"
                weight={700}
                onClick={handleGoOut}
                id="exit"
              >
                Sair
              </TextRegular>
            </ContainerLogin>
            <TextRegular weight={700}>{userDataLogin.name}</TextRegular>
          </ContentLoginData>
        </div>{' '}
        {menuIsVisible === false ? (
          <List
            size={32}
            onClick={() => setMenuIsVisible(true)}
            className="mobile"
          />
        ) : (
          <X size={32} onClick={() => setMenuIsVisible(false)} />
        )}
      </ContentUser>
    </ContainerHeader>
  )
}
