import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  button {
    width: 22rem;

    align-self: flex-start;

    margin-left: 5rem;
    margin-bottom: 1rem;
    padding: 1.5rem;

    font-size: 1.2rem;
  }

  @media (max-width: 1023px) {
    button {
      margin-left: 0;
    }
  }
`

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  padding: 0.5rem 5rem;

  > div {
    width: 70%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  @media (max-width: 1023px) {
    padding: 0.5rem 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > div {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }
  }
`

export const ContentInput = styled.div`
  width: 100%;
  height: 15rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 1.5rem;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors['bg-home']};

  > h1 {
    align-self: flex-start;
  }

  div {
    width: 100%;
  }
`

export const ContentInputSchool = styled(ContentInput)`
  width: 50%;
  height: 32rem;
`

interface InputProps {
  error?: string
}

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 2rem;

  border: ${({ error, theme }) =>
    error
      ? `1px solid ${theme.colors['base-red']}`
      : `1px solid ${theme.colors['bg-header-hover']}`};
  border-radius: 6px;
  padding: 1.8rem;

  font-size: 1rem;
  color: #000;

  background: ${({ theme }) => theme.colors['bg-header-hover']};

  &::placeholder {
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors['base-green']};
  }
`

export const Select = styled.select<InputProps>`
  width: 100%;
  background: ${({ theme }) => theme.colors['bg-header-hover']};

  height: 3.7rem;

  border: ${({ error, theme }) =>
    error
      ? `1px solid ${theme.colors['base-red']}`
      : `1px solid ${theme.colors['bg-header-hover']}`};
  border-radius: 6px;
  padding: 0 1.5rem;

  font-size: 1rem;

  option {
    font-size: 1rem;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors['base-green']};
  }
`

export const TextArea = styled.textarea<InputProps>`
  width: 100%;
  height: 6rem;
  border: 1px solid ${({ theme }) => theme.colors['bg-header-hover']};
  border-radius: 6px;
  padding: 1rem;

  font-size: 1rem;
  color: #000;

  background: ${({ theme }) => theme.colors['bg-header-hover']};

  &:focus {
    border-color: ${({ theme }) => theme.colors['base-green']};
  }
`
