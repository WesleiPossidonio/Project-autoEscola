import styled from 'styled-components'

interface ContainerHomeProps {
  menuIsVisible: boolean
}

export const ContainerHome = styled.section<ContainerHomeProps>`
  width: ${({ menuIsVisible }) => (menuIsVisible === false ? '100%' : '80%')};

  position: fixed;
  top: 6rem;
  bottom: 0;
  right: 0;

  overflow-y: scroll;

  background-color: ${({ theme }) => theme.colors['bg-main']};

  h1 {
    padding: 5rem 5rem 1.5rem 5rem;
  }

  @media (max-width: 1024px) {
    padding: 2rem;

    h1 {
      padding: 2rem 3rem 1.5rem 3rem;
    }
  }

  @media (max-width: 1023px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    h1 {
      padding: 2rem 0;
    }
  }
`

export const HeaderHome = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 5rem;

  padding: 0 5rem 2.5rem 5rem;

  @media (max-width: 1024px) {
    padding: 1rem 3rem 1.5rem 3rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;

    padding: 1.5rem 0 0 0;
  }
`

export const ContentSelect = styled.div`
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    width: 50%;
  }
`

interface HeaderHomeProps {
  listpaimentduda: string
}

export const SelectedText = styled.p<HeaderHomeProps>`
  width: 50%;
  font-size: 1.1rem;
  font-weight: 600;
  padding-bottom: 0.2rem;

  border-bottom: ${({ theme, listpaimentduda }) =>
    (listpaimentduda === 'Pendente' &&
      `3px solid ${theme.colors['base-red']}`) ||
    (listpaimentduda === 'Pago' && `3px solid ${theme.colors['base-green']}`)};

  cursor: pointer;

  @media (min-width: 600px) {
    br {
      display: none;
    }
  }
`

export const ContentButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const Button = styled.button`
  width: 13rem;

  border: none;
  border-radius: 5px;
  padding: 1.3rem;

  font-size: 1rem;
  font-weight: 600;

  color: ${({ theme }) => theme.colors['base-text-login']};

  background-color: ${({ theme }) => theme.colors['base-green']};

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.6;
  }

  @media (max-width: 600px) {
    display: none;
  }
`
export const ContainerContent = styled.div`
  width: 100%;
  padding: 0 5rem;

  @media (max-width: 1024px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`
