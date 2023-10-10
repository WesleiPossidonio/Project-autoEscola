import styled from 'styled-components'

export const ContainerMenu = styled.div`
  position: fixed;
  top: 6rem;
  bottom: 0;
  left: 0;
  width: 20%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  padding-top: 1rem;

  overflow-y: scroll;

  background-color: ${({ theme }) => theme.colors['bg-home']};

  @media (max-width: 1023px) {
    display: none;
  }
`

export const ContainerUser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  text-align: right;

  padding: 0 1.5rem 1rem;

  span {
    color: red;
    cursor: pointer;
  }
`

export const Line = styled.div`
  height: 2rem;
  border: 1px solid #000;
`

interface LinkMenuProps {
  bgMenu?: string
}

export const LinkMenu = styled.div<LinkMenuProps>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.4rem;

  padding: 0.5rem 2.5rem;

  color: ${({ theme }) => theme.colors['base-text']};

  cursor: pointer;

  > p {
    font-size: 1rem;
    font-weight: 700;
  }

  background-color: ${({ theme, bgMenu }) =>
    bgMenu && theme.colors['bg-header-hover']};
  border: none;
  border-left: ${({ theme, bgMenu }) =>
    bgMenu && `7px solid ${theme.colors['base-green']}`};

  > svg {
    color: ${({ theme, bgMenu }) => bgMenu && theme.colors['base-green']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['bg-header-hover']};
    border-left: 7px solid ${({ theme }) => theme.colors['base-green']};

    > svg {
      color: ${({ theme }) => theme.colors['base-green']};
    }
  }

  @media (max-width: 1220px) {
    width: 100%;

    > p {
      font-size: 1rem;
      font-weight: 700;
    }

    > svg {
      font-size: 0.5rem;
    }
  }

  @media (max-width: 1050px) {
    > svg {
      display: none;
    }
  }
`
