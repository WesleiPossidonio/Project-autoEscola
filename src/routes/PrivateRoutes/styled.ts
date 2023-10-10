import styled from 'styled-components'

interface ContentMainProps {
  menuIsVisible: boolean
}

export const ContentMain = styled.main<ContentMainProps>`
  width: ${({ menuIsVisible }) => (menuIsVisible === true ? '100%' : '80%')};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;

  @media (max-width: 1023px) {
    display: none;
  }
`
export const ContainerMobile = styled.main`
  display: none;

  @media (max-width: 1023px) {
    display: block;
    width: 100%;
  }
`
