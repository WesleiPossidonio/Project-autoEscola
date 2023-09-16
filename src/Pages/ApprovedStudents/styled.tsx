import styled from 'styled-components'

export const ContainerHome = styled.section`
  width: 80%;
  position: fixed;
  top: 6rem;
  bottom: 0;
  right: 0;

  overflow-y: scroll;

  background-color: ${({ theme }) => theme.colors['bg-main']};

  h1 {
    padding: 3rem 5rem;
  }

  @media (max-width: 1023px) {
    width: 100%;
    padding: 2rem;

    h1 {
      padding: 2rem 2rem 0 2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h1 {
      padding: 1rem 1rem 0 1rem;
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
    padding: 2rem 1rem;
    gap: 3rem;
  }
`
export const ContentButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1023px) {
    padding: 1rem;
  }
  @media (max-width: 768px) {
    padding: 0;
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
