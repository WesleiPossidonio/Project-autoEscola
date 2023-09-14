import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 12rem;
  padding: 1.1rem;
  border: none;
  border-radius: 6px;

  cursor: pointer;

  font-size: 1rem;
  box-shadow: -5px 0px 31px 0px rgba(0, 0, 0, 0.1);

  background: ${({ theme }) => theme.colors['base-green']};
  color: #fff;

  font-weight: 600;
  font-size: 1rem;

  &:hover {
    transition: background-color 1s;
    opacity: 0.9;
  }

  &:active {
    opacity: 0.5;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.9rem;

    svg {
      width: 2rem;
    }
  }
`
