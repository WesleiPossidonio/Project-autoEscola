import styled from 'styled-components'

export const ContainerCreatedStudents = styled.section`
  width: 80%;
  position: fixed;
  top: 6rem;
  bottom: 0;
  right: 0;

  overflow-y: scroll;

  background-color: ${({ theme }) => theme.colors['bg-main']};
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  padding: 5rem 5rem 4rem 5rem;
`

export const ContentButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  gap: 2rem;
`
