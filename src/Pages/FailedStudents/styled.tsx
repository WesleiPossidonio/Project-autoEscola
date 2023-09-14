import styled from 'styled-components'

export const ContainerHome = styled.section`
  width: 80%;
  position: fixed;
  top: 6rem;
  bottom: 0;
  right: 0;

  overflow-y: scroll;

  background-color: ${({ theme }) => theme.colors['bg-main']};
`

export const HeaderHome = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 5rem;

  padding: 4rem 5rem;
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
`
export const ContainerContent = styled.div`
  width: 100%;
  padding: 0 5rem;
`
