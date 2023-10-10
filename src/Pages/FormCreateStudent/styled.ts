import styled from 'styled-components'

interface ContainerCreatedStudentsProps {
  menuIsVisible: boolean
}

export const ContainerCreatedStudents = styled.section<ContainerCreatedStudentsProps>`
  width: ${({ menuIsVisible }) => (menuIsVisible === false ? '100%' : '80%')};

  position: fixed;
  top: 6rem;
  bottom: 0;
  right: 0;

  overflow-y: scroll;

  background-color: ${({ theme }) => theme.colors['bg-main']};

  @media (max-width: 1023px) {
    width: 100%;
    padding: 2rem;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  padding: 5rem 5rem 4rem 5rem;

  @media (max-width: 1023px) {
    padding: 1.5rem 0;
    padding-bottom: 2rem;
  }

  @media (max-width: 768px) {
    button {
      display: none;
    }
  }
`
export const HeaderHome = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 5rem;

  padding: 1rem 5rem;

  @media (max-width: 1023px) {
    padding: 3rem 2rem;
    gap: 3rem;
  }

  @media (max-width: 1023px) {
    padding: 2rem 1rem;
    gap: 3rem;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`
export const ContainerContent = styled.div`
  width: 100%;
  padding: 0 5rem;

  @media (max-width: 1023px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`
export const ContentButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`
