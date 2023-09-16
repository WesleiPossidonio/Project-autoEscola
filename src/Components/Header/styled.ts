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

  .mobile {
    display: none;
  }

  @media (max-width: 1023px) {
    .mobile {
      display: initial;
    }
    > nav {
      display: none;
    }
  }
`

export const ContentUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  #exit {
    cursor: pointer;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 767px) {
    > div {
      display: none;
    }
  }
`

export const ImageLogo = styled.img`
  width: 8rem;
`

export const Line = styled.div`
  height: 2rem;
  border: 1px solid #000;
`

export const ContentLoginData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: none;
`

export const ContainerLogin = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.2rem;
`
