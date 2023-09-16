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
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useUser } from '../../Hooks/useUser'
import { CreateUserModal } from '../CreateUserModal'
import { ContainerMenu, LinkMenu } from './styled'

interface MenuProps {
  menuIsVisible: boolean
}

export const MenuMobile = ({ menuIsVisible }: MenuProps) => {
  const [bgMenu, setBgMenu] = useState('')
  const [displayMenu, setDisplayMenu] = useState('')

  const { userDataLogin } = useUser()

  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])

  const handleNavigatePages = (data: string) => {
    setBgMenu(data)
    data === 'studentsAuthorized' && navigate('/alunos-autorizados')
    data === 'authorizationToTestForm' && navigate('/autorizar-alunos')
    data === 'approvedStudents' && navigate('/alunos-aprovados')
    data === 'failedStudents' && navigate('/alunos-reprovados')
    data === 'dudaPendents' && navigate('/pagamento-duda')
    data === 'MyData' && navigate('/')

    data === 'NewUser' && setDisplayMenu('NewUser')
  }

  return (
    <ContainerMenu isVisible={menuIsVisible} displayMenu={displayMenu}>
      <nav>
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
            <CreateUserModal setDisplayMenu={setDisplayMenu} />
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

        <LinkMenu
          onClick={() => handleNavigatePages('studentsAuthorized')}
          bgMenu={bgMenu === 'studentsAuthorized' ? 'active' : ''}
        >
          <UserGear size={49} weight="bold" />
          <p>
            Alunos <br /> Autorizados
          </p>
        </LinkMenu>
        <LinkMenu
          onClick={() => handleNavigatePages('authorizationToTestForm')}
          bgMenu={bgMenu === 'authorizationToTestForm' ? 'active' : ''}
        >
          <Student size={46} weight="fill" />
          <p>
            Autorizar
            <br /> para Prova
          </p>
        </LinkMenu>
        <LinkMenu
          onClick={() => handleNavigatePages('approvedStudents')}
          bgMenu={bgMenu === 'approvedStudents' ? 'active' : ''}
        >
          <CheckCircle size={45} weight="bold" />
          <p>
            Alunos <br /> Aprovados
          </p>
        </LinkMenu>
        <LinkMenu
          onClick={() => handleNavigatePages('failedStudents')}
          bgMenu={bgMenu === 'failedStudents' ? 'active' : ''}
        >
          <XCircle size={45} weight="bold" />
          <p>
            Alunos <br /> Reprovados
          </p>
        </LinkMenu>
        <LinkMenu
          onClick={() => handleNavigatePages('dudaPendents')}
          bgMenu={bgMenu === 'dudaPendents' ? 'active' : ''}
        >
          <CheckSquareOffset size={45} weight="bold" />
          <p>
            Alunos com <br /> Duda Pendentes
          </p>
        </LinkMenu>
      </nav>
    </ContainerMenu>
  )
}