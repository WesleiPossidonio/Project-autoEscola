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

import { useDataStudent } from '../../Hooks/useDataStudents'
import { useUser } from '../../Hooks/useUser'
import { CreateUserModal } from '../CreateUserModal'
import { TextRegular } from '../typography'
import { ContainerMenu, LinkMenu } from './styled'

export const MenuMobile = () => {
  const [bgMenu, setBgMenu] = useState('')
  const [displayMenu, setDisplayMenu] = useState('')

  const { userDataLogin } = useUser()
  const { menuIsVisible, setMenuIsVisible } = useDataStudent()

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
    data === 'exit' && setMenuIsVisible(false)

    setMenuIsVisible(false)
  }

  const handleGoOut = () => {
    localStorage.removeItem('cartorio:userData1.0')
    navigate('/login')
  }

  return (
    <ContainerMenu isVisible={menuIsVisible} displayMenu={displayMenu}>
      <nav>
        <LinkMenu
          onClick={() => handleGoOut()}
          bgMenu={bgMenu === 'exit' ? 'active' : ''}
        >
          <TextRegular weight={700} color="red">
            Sair
          </TextRegular>
        </LinkMenu>
        {userDataLogin.admin && (
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <LinkMenu
                onClick={() => handleNavigatePages('NewUser')}
                bgMenu={bgMenu === 'NewUser' ? 'active' : ''}
              >
                <User size={30} weight="bold" />
                <TextRegular color="text" weight={700}>
                  Cadastrar <br /> Novo Usuário
                </TextRegular>
              </LinkMenu>
            </Dialog.Trigger>
            <CreateUserModal setDisplayMenu={setDisplayMenu} />
          </Dialog.Root>
        )}

        <LinkMenu
          onClick={() => handleNavigatePages('MyData')}
          bgMenu={bgMenu === 'MyData' ? 'active' : ''}
        >
          <UserFocus size={30} weight="bold" />
          <TextRegular color="text" weight={700}>
            Meus <br /> Dados
          </TextRegular>
        </LinkMenu>

        <LinkMenu
          onClick={() => handleNavigatePages('studentsAuthorized')}
          bgMenu={bgMenu === 'studentsAuthorized' ? 'active' : ''}
        >
          <UserGear size={30} weight="bold" />
          <TextRegular color="text" weight={700}>
            Alunos <br /> Autorizados
          </TextRegular>
        </LinkMenu>
        <LinkMenu
          onClick={() => handleNavigatePages('authorizationToTestForm')}
          bgMenu={bgMenu === 'authorizationToTestForm' ? 'active' : ''}
        >
          <Student size={30} weight="fill" />
          <TextRegular color="text" weight={700}>
            Autorizar
            <br /> para Prova
          </TextRegular>
        </LinkMenu>
        <LinkMenu
          onClick={() => handleNavigatePages('approvedStudents')}
          bgMenu={bgMenu === 'approvedStudents' ? 'active' : ''}
        >
          <CheckCircle size={30} weight="bold" />
          <TextRegular color="text" weight={700}>
            Alunos <br /> Aprovados
          </TextRegular>
        </LinkMenu>
        <LinkMenu
          onClick={() => handleNavigatePages('failedStudents')}
          bgMenu={bgMenu === 'failedStudents' ? 'active' : ''}
        >
          <XCircle size={30} weight="bold" />
          <TextRegular color="text" weight={700}>
            Alunos <br /> Reprovados
          </TextRegular>
        </LinkMenu>
        <LinkMenu
          onClick={() => handleNavigatePages('dudaPendents')}
          bgMenu={bgMenu === 'dudaPendents' ? 'active' : ''}
        >
          <CheckSquareOffset size={30} weight="bold" />
          <TextRegular color="text" weight={700}>
            Alunos com <br /> Duda Pendentes
          </TextRegular>
        </LinkMenu>
      </nav>
    </ContainerMenu>
  )
}
