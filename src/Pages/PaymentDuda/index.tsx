import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../Components/Button'
import { InputSearch } from '../../Components/InputSearch'
import { BasicSelect } from '../../Components/Selected'
import { TitleText } from '../../Components/typography'
import { useDataStudent } from '../../Hooks/useDataStudents'
import { TableStudents } from './components/TableDataStudents'
import {
  ContainerContent,
  ContainerHome,
  ContentButtons,
  HeaderHome,
  SelectedText,
} from './styled'

export const PaimentDuda = () => {
  const navigate = useNavigate()

  const { dataListStudents, setFilteredListSelectofDuda } = useDataStudent()

  const [listPaimentDuda, setListPaimentDuda] = useState('Pendente')

  useEffect(() => {
    const listTest2 = dataListStudents.filter((list) => {
      return list.payment_of_duda === listPaimentDuda
    })
    setFilteredListSelectofDuda(listTest2)
  }, [dataListStudents, listPaimentDuda, setFilteredListSelectofDuda])

  const handleStatePaimentDuda = (data: string) => {
    setListPaimentDuda(data)

    if (data === 'Pago') {
      const listTest = dataListStudents.filter((list) => {
        return list.payment_of_duda === data
      })
      setFilteredListSelectofDuda(listTest)
    } else {
      const listTest2 = dataListStudents.filter((list) => {
        return list.payment_of_duda === data
      })
      setFilteredListSelectofDuda(listTest2)
    }
  }

  const handleNavigateToHome = () => {
    navigate('/')
  }

  return (
    <ContainerHome>
      <TitleText size="m" weight={600}>
        Lista de Duda dos Alunos
      </TitleText>
      <HeaderHome>
        <SelectedText
          listpaimentduda={listPaimentDuda === 'Pago' ? 'Pago' : ''}
          onClick={() => handleStatePaimentDuda('Pago')}
        >
          Duda Pago
        </SelectedText>
        <SelectedText
          listpaimentduda={listPaimentDuda === 'Pendente' ? 'Pendente' : ''}
          onClick={() => handleStatePaimentDuda('Pendente')}
        >
          Duda Pendente
        </SelectedText>
        <ContentButtons>
          <BasicSelect />
          <Button onClick={() => handleNavigateToHome()}>
            Voltar ao Inicio
          </Button>
        </ContentButtons>
      </HeaderHome>

      <ContainerContent>
        <InputSearch />
        <TableStudents />
      </ContainerContent>
    </ContainerHome>
  )
}
