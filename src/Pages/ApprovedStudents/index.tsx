import { useNavigate } from 'react-router-dom'

import { InputSearch } from '../../Components/InputSearch'
import { BasicSelect } from '../../Components/Selected'
import { TitleText } from '../../Components/typography'
import { useDataStudent } from '../../Hooks/useDataStudents'
import { TableApprovedStudents } from './components/TableDataAprovedStudents'
import {
  Button,
  ContainerContent,
  ContainerHome,
  ContentButtons,
  HeaderHome,
} from './styled'

export const AprovedStudentsPage = () => {
  const navigate = useNavigate()

  const { menuIsVisible } = useDataStudent()

  const handleNavigateToHome = () => {
    navigate('/')
  }

  return (
    <ContainerHome menuIsVisible={menuIsVisible}>
      <TitleText size="m" weight={600}>
        Lista de Alunos <br /> Aprovados
      </TitleText>
      <HeaderHome>
        <ContentButtons>
          <BasicSelect />
          <Button onClick={() => handleNavigateToHome()}>
            Voltar ao Início
          </Button>
        </ContentButtons>
      </HeaderHome>

      <ContainerContent>
        <InputSearch />
        <TableApprovedStudents />
      </ContainerContent>
    </ContainerHome>
  )
}
