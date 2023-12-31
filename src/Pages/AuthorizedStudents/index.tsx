import { useNavigate } from 'react-router-dom'

import { InputSearch } from '../../Components/InputSearch'
import { BasicSelect } from '../../Components/Selected'
import { TitleText } from '../../Components/typography'
import { useDataStudent } from '../../Hooks/useDataStudents'
import {
  Button,
  ContainerContent,
  ContainerHome,
  ContentButtons,
  HeaderHome,
} from './styled'
import { TableStudents } from './TableDataStudents'

export const AuthorizedStudents = () => {
  const navigate = useNavigate()
  const { menuIsVisible } = useDataStudent()

  const handleNavigate = () => {
    navigate('/autorizar-alunos')
  }

  return (
    <ContainerHome menuIsVisible={menuIsVisible}>
      <TitleText size="m" weight={600}>
        Lista de Alunos <br /> com Autorização para Avaliação
      </TitleText>
      <HeaderHome>
        <ContentButtons>
          <BasicSelect />
          <Button onClick={handleNavigate}>Autorizar Alunos</Button>
        </ContentButtons>
      </HeaderHome>

      <ContainerContent>
        <InputSearch />
        <TableStudents />
      </ContainerContent>
    </ContainerHome>
  )
}
