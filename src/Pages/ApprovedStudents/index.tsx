import { InputSearch } from '../../Components/InputSearch'
import { BasicSelect } from '../../Components/Selected'
import { TableApprovedStudents } from './components/TableDataAprovedStudents'
import {
  Button,
  ContainerContent,
  ContainerHome,
  ContentButtons,
  HeaderHome,
} from './styled'

export const AprovedStudentsPage = () => {
  return (
    <ContainerHome>
      <HeaderHome>
        <h1>
          Lista de Alunos <br /> Aprovados
        </h1>

        <ContentButtons>
          <BasicSelect />
          <Button>Voltar ao Início</Button>
        </ContentButtons>
      </HeaderHome>

      <ContainerContent>
        <InputSearch />
        <TableApprovedStudents />
      </ContainerContent>
    </ContainerHome>
  )
}
