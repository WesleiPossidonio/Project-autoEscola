import { Button } from '../../Components/Button'
import { TitleText } from '../../Components/typography'
import { FormCreatedStudents } from './components/formCreatedNewStudents'
import {
  ContainerCreatedStudents,
  ContentButtons,
  HeaderContainer,
} from './styled'

export const CreatedStudents = () => {
  return (
    <ContainerCreatedStudents>
      <HeaderContainer>
        <TitleText size="m" weight={600}>
          Autorizar Alunos
        </TitleText>
        <ContentButtons>
          <Button>Voltar ao Inicio</Button>
        </ContentButtons>
      </HeaderContainer>

      <FormCreatedStudents />
    </ContainerCreatedStudents>
  )
}
