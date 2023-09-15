import { styled as muiStyled } from '@mui/system'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import styled from 'styled-components'

export const ContainerHome = styled.section`
  width: 80%;
  position: fixed;
  top: 6rem;
  bottom: 0;
  right: 0;

  overflow-y: scroll;

  padding: 5rem;

  background-color: ${({ theme }) => theme.colors['bg-main']};

  > h1 {
    margin-bottom: 2rem;
  }
`

export const ContainerData = styled.div`
  width: 100;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const ContainerDataUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const ContentDataUser = styled.div`
  width: 35rem;
  height: 10rem;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  border-radius: 10px;
  box-shadow: -5px 0px 31px 0px rgba(0, 0, 0, 0.1);

  background-color: ${({ theme }) => theme.colors['bg-home']};
`

export const DataUserContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  div {
  }
`
export const ContainerLocalizationProvider = muiStyled(LocalizationProvider)({
  backgroundColor: '#fff',
})
