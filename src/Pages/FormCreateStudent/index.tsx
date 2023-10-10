import { useNavigate } from 'react-router-dom'

import { Button } from '../../Components/Button'
import { TitleText } from '../../Components/typography'
import { useDataStudent } from '../../Hooks/useDataStudents'
import { FormCreatedStudents } from './components/formCreatedNewStudents'
import {
  ContainerCreatedStudents,
  ContentButtons,
  HeaderContainer,
} from './styled'

export const CreatedStudents = () => {
  const navigate = useNavigate()
  const { menuIsVisible } = useDataStudent()

  const handleNavigateToHome = () => {
    navigate('/')
  }
  return (
    <ContainerCreatedStudents menuIsVisible={menuIsVisible}>
      <HeaderContainer>
        <TitleText size="m" weight={600}>
          Autorizar Alunos
        </TitleText>
        <ContentButtons>
          <Button onClick={() => handleNavigateToHome()}>
            Voltar ao Inicio
          </Button>
        </ContentButtons>
      </HeaderContainer>

      <FormCreatedStudents />
    </ContainerCreatedStudents>
  )
}
