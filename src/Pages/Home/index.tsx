import { InputSearch } from '../../Components/InputSearch'
import { BasicSelect } from '../../Components/Selected'
import { TableStudents } from './components/TableDataStudents'
import {
  Button,
  ContainerContent,
  ContainerHome,
  ContentButtons,
  HeaderHome,
} from './styled'

export const Home = () => {
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
