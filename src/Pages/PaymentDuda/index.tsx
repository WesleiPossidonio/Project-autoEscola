import { useState } from 'react'

import { Button } from '../../Components/Button'
import { InputSearch } from '../../Components/InputSearch'
import { BasicSelect } from '../../Components/Selected'
import { TitleText } from '../../Components/typography'
import {
  ContainerContent,
  ContainerHome,
  ContentButtons,
  HeaderHome,
  SelectedText,
} from './styled'
import { TableStudents } from './components/TableDataStudents'

export const PaimentDuda = () => {
  const [paimentDuda, setPaimetDuda] = useState('Pendente')

  const handleStatePaimentDuda = (data: string) => {
    data === 'Pago' ? setPaimetDuda('Pago') : setPaimetDuda('Pendente')
  }

  return (
    <ContainerHome>
      <TitleText size="m" weight={600}>
        Lista de Duda dos Alunos
      </TitleText>
      <HeaderHome>
        <SelectedText
          paimentDuda={paimentDuda === 'Pago' ? 'Pago' : ''}
          onClick={() => handleStatePaimentDuda('Pago')}
        >
          Duda Pago
        </SelectedText>
        <SelectedText
          paimentDuda={paimentDuda === 'Pendente' ? 'Pendente' : ''}
          onClick={() => handleStatePaimentDuda('Pendente')}
        >
          Duda Pendente
        </SelectedText>
        <ContentButtons>
          <BasicSelect />
          <Button>Voltar ao Inicio</Button>
        </ContentButtons>
      </HeaderHome>

      <ContainerContent>
        <InputSearch />
        <TableStudents paimentDuda={paimentDuda} />
      </ContainerContent>
    </ContainerHome>
  )
}
