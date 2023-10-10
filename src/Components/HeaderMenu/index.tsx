import {
  User,
  UserGear,
  Student,
  XCircle,
  CheckCircle,
  CheckSquareOffset,
  UserFocus,
} from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useUser } from '../../Hooks/useUser'
import { CreateUserModal } from '../CreateUserModal'
import { TextRegular } from '../typography'
import { ContainerMenu, ContainerUser, LinkMenu } from './styled'

export const HeaderMenu = () => {
  const [bgMenu, setBgMenu] = useState('')

  const { userDataLogin } = useUser()

  const navigate = useNavigate()

  const handleNavigatePages = (data: string) => {
    setBgMenu(data)
    data === 'studentsAuthorized' && navigate('/alunos-autorizados')
    data === 'authorizationToTestForm' && navigate('/autorizar-alunos')
    data === 'approvedStudents' && navigate('/alunos-aprovados')
    data === 'failedStudents' && navigate('/alunos-reprovados')
    data === 'dudaPendents' && navigate('/pagamento-duda')
    data === 'MyData' && navigate('/')
  }

  const handleGoOut = () => {
    localStorage.removeItem('cartorio:userData1.0')
    navigate('/login')
  }

  return (
    <ContainerMenu>
      <ContainerUser>
        <TextRegular size="s" weight={700} color="text">
          Olá, <span onClick={handleGoOut}>Sair</span>
          <br /> {userDataLogin.name}
        </TextRegular>
      </ContainerUser>

      {userDataLogin.admin && (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <LinkMenu
              onClick={() => handleNavigatePages('NewUser')}
              bgMenu={bgMenu === 'NewUser' ? 'active' : ''}
            >
              <User size={45} weight="bold" />
              <p>
                Cadastrar <br /> Novo Usuário
              </p>
            </LinkMenu>
          </Dialog.Trigger>
          <CreateUserModal />
        </Dialog.Root>
      )}

      <LinkMenu
        onClick={() => handleNavigatePages('MyData')}
        bgMenu={bgMenu === 'MyData' ? 'active' : ''}
      >
        <UserFocus size={49} weight="bold" />
        <p>
          Meus <br /> Dados
        </p>
      </LinkMenu>

      {userDataLogin.admin && (
        <LinkMenu
          onClick={() => handleNavigatePages('studentsAuthorized')}
          bgMenu={bgMenu === 'studentsAuthorized' ? 'active' : ''}
        >
          <UserGear size={49} weight="bold" />
          <p>
            Alunos <br /> Autorizados
          </p>
        </LinkMenu>
      )}

      <LinkMenu
        onClick={() => handleNavigatePages('authorizationToTestForm')}
        bgMenu={bgMenu === 'authorizationToTestForm' ? 'active' : ''}
      >
        <Student size={46} weight="fill" />
        <p>
          Autorizar <br /> para Prova
        </p>
      </LinkMenu>

      {userDataLogin.admin && (
        <LinkMenu
          onClick={() => handleNavigatePages('approvedStudents')}
          bgMenu={bgMenu === 'approvedStudents' ? 'active' : ''}
        >
          <CheckCircle size={45} weight="bold" />
          <p>
            Alunos <br /> Aprovados
          </p>
        </LinkMenu>
      )}

      {userDataLogin.admin && (
        <LinkMenu
          onClick={() => handleNavigatePages('failedStudents')}
          bgMenu={bgMenu === 'failedStudents' ? 'active' : ''}
        >
          <XCircle size={45} weight="bold" />
          <p>
            Alunos <br /> Reprovados
          </p>
        </LinkMenu>
      )}

      {userDataLogin.admin && (
        <LinkMenu
          onClick={() => handleNavigatePages('dudaPendents')}
          bgMenu={bgMenu === 'dudaPendents' ? 'active' : ''}
        >
          <CheckSquareOffset size={45} weight="bold" />
          <p>
            Alunos com <br /> Duda Pendentes
          </p>
        </LinkMenu>
      )}
    </ContainerMenu>
  )
}
