import styled from 'styled-components'

export const ContentMain = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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
