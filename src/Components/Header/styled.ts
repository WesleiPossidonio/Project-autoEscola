import styled from 'styled-components'

export const ContainerHeader = styled.header`
  width: 100%;
  height: 5rem;
  padding: 3rem 2rem;

  position: fixed;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.colors['bg-home']};
`

export const ImageLogo = styled.img`
  width: 8rem;
`

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  > div {
    height: 2rem;
    border: 1px solid #000;
  }
`
