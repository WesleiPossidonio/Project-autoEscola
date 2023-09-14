import styled from 'styled-components'

export const ContainerAboutStudent = styled.section`
  position: fixed;
  top: 6rem;
  bottom: 0;
  right: 0;
  width: 80%;

  padding: 5rem;
  overflow-y: scroll;

  background-color: ${({ theme }) => theme.colors['bg-main']};
`
