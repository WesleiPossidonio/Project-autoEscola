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

  svg {
    cursor: pointer;
  }

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

  @media (max-width: 767px) {
    > div {
      display: none;
    }
  }
`

export const ImageLogo = styled.img`
  width: 8rem;
`
