import styled, { css } from 'styled-components'

interface ContainerProps {
  isVisible: boolean
  displayMenu: string
}

export const ContainerMenu = styled.div<ContainerProps>`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors['bg-home']};

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: 0.5s;

  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
  }

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  nav {
    display: ${({ displayMenu }) =>
      displayMenu === 'NewUser' ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5;
    transform: scale(0.7);
    transition: 0.7s;

    padding-top: 2rem;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }

      nav {
        transform: scale(1);
      }
    `}

  @media (min-width: 1024px) {
    display: none;
  }
`

interface LinkMenuProps {
  bgMenu: string
}

export const LinkMenu = styled.div<LinkMenuProps>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;

  padding: 1rem 2rem;

  color: ${({ theme }) => theme.colors['base-text']};

  cursor: pointer;

  background-color: ${({ theme, bgMenu }) =>
    bgMenu && theme.colors['bg-header-hover']};
  border: none;
  border-left: ${({ theme, bgMenu }) =>
    bgMenu && `0 7px 0   solid ${theme.colors['base-green']}`};

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
`
