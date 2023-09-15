import { InputSearch } from '../../Components/InputSearch'
import { BasicSelect } from '../../Components/Selected'
import {
  Button,
  ContainerContent,
  ContainerHome,
  ContentButtons,
  HeaderHome,
} from './styled'
import { TableStudents } from './TableDataStudents'

export const AuthorizedStudents = () => {
  return (
    <ContainerHome>
      <HeaderHome>
        <h1>
          Lista de Alunos <br /> com provas Marcadas
        </h1>

        <ContentButtons>
          <BasicSelect />
          <Button>Autorizar Alunos</Button>
        </ContentButtons>
      </HeaderHome>

      <ContainerContent>
        <InputSearch />
        <TableStudents />
      </ContainerContent>
    </ContainerHome>
  )
}
