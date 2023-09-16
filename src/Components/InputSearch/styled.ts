import styled from 'styled-components'

export const Form = styled.form`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 500px) {
    width: 100%;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 3.5rem;

  border: none;
  border-radius: 6px;

  padding: 1.5rem;

  background-color: ${({ theme }) => theme.colors['bg-home']};
  color: #000;

  font-size: 1rem;

  &::placeholder {
    color: #000;
  }
`
