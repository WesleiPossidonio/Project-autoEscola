import { useNavigate } from 'react-router-dom'

import { InputSearch } from '../../Components/InputSearch'
import { BasicSelect } from '../../Components/Selected'
import { TitleText } from '../../Components/typography'
import { useDataStudent } from '../../Hooks/useDataStudents'
import { TableFailedStudents } from './components/TableDataFailedStudents'
import {
  Button,
  ContainerContent,
  ContainerHome,
  ContentButtons,
  HeaderHome,
} from './styled'

export const FailedStudentsPage = () => {
  const navigate = useNavigate()
  const handleNavigateToHome = () => {
    navigate('/')
  }
  const { menuIsVisible } = useDataStudent()

  return (
    <ContainerHome menuIsVisible={menuIsVisible}>
      <TitleText size="m" weight={600}>
        Lista de Alunos <br /> com provas Marcadas
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
        <TableFailedStudents />
      </ContainerContent>
    </ContainerHome>
  )
}
