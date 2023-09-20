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

  @media (max-width: 1023px) {
    width: 100%;
    padding: 2rem;
  }
`

export const ContainerData = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`

export const ContainerDataUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1023px) {
    width: 100%;
  }
`

export const ContentDataUser = styled.div`
  width: 35rem;
  height: 13rem;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  border-radius: 10px;
  box-shadow: -5px 0px 31px 0px rgba(0, 0, 0, 0.1);

  background-color: ${({ theme }) => theme.colors['bg-home']};

  @media (max-width: 1288px) {
    width: min(23rem, 35rem);
    padding: 1rem;
  }

  @media (max-width: 1023px) {
    width: 100%;
  }
`

export const DataUserContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5rem;

  div {
  }

  @media (max-width: 1288px) {
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  @media (max-width: 1023px) {
    justify-content: space-around;
  }

  @media (max-width: 725px) {
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  @media (max-width: 640px) {
    justify-content: space-around;
  }

  @media (max-width: 400px) {
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`

export const ContainerCalendar = styled.div`
  > div {
    background-color: ${({ theme }) => theme.colors['bg-home']};

    width: 21.875rem;
    height: 23.125rem;

    border-radius: 10px;

    box-shadow: -5px 0px 31px 0px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 640px) {
    display: none;
  }
`
export const ContainerLocalizationProvider = muiStyled(LocalizationProvider)({
  backgroundColor: '#fff',
})
