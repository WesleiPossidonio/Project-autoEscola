import {
  User,
  UserGear,
  Student,
  XCircle,
  CheckCircle,
  CheckSquareOffset,
} from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useUser } from '../../Hooks/useUser'
import { CreateUserModal } from '../CreateUserModal'
import { ContainerMenu, LinkMenu } from './styled'
export const HeaderMenu = () => {
  const [bgMenu, setBgMenu] = useState('')

  const { userDataLogin } = useUser()

  const navigate = useNavigate()

  const handleNavigatePages = (data: string) => {
    setBgMenu(data)
    data === 'studentsAuthorized' && navigate('/')
    data === 'authorizationToTestForm' && navigate('/autorizar-alunos')
    data === 'approvedStudents' && navigate('/alunos-aprovados')
    data === 'failedStudents' && navigate('/alunos-reprovados')
    data === 'dudaPendents' && navigate('/pagamento-duda')
  }

  return (
    <ContainerMenu>
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
          Autorização <br /> para Prova
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
    </ContainerMenu>
  )
}
