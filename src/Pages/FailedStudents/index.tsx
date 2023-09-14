import { InputSearch } from '../../Components/InputSearch'
import { BasicSelect } from '../../Components/Selected'
import { TableFailedStudents } from './components/TableDataFailedStudents'
import {
  Button,
  ContainerContent,
  ContainerHome,
  ContentButtons,
  HeaderHome,
} from './styled'

export const FailedStudentsPage = () => {
  return (
    <ContainerHome>
      <HeaderHome>
        <h1>
          Lista de Alunos <br /> Reprovados
        </h1>

        <ContentButtons>
          <BasicSelect />
          <Button>Voltar ao Início</Button>
        </ContentButtons>
      </HeaderHome>

      <ContainerContent>
        <InputSearch />
        <TableFailedStudents />
      </ContainerContent>
    </ContainerHome>
  )
}
