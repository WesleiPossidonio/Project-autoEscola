import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { styled } from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  z-index: 99999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  z-index: 99999;
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: #f2f3ee;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  button[type='submit'] {
    height: 58px;
    border: 0;
    background-color: ${({ theme }) => theme.colors['base-red']};
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    padding: 0 1.25rem;

    border-radius: 6px;
    margin-top: 1.5rem;

    cursor: pointer;
    box-shadow: -5px 0px 31px 0px rgba(0, 0, 0, 0.1);

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      transition: background-color 0.2s;
      background-color: ${({ theme }) => theme.colors['base-green']};
    }
  }
`

interface InputProps {
  error?: string
}

export const Form = styled.form`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    margin-top: 0.2rem;
  }
`

export const Input = styled.input<InputProps>`
  width: 100%;
  border-radius: 6px;
  border: ${({ theme, error }) =>
    error ? `1px solid ${theme.colors['base-red']}` : 0};
  background: #fff;
  color: ${({ theme }) => theme.colors['base-text']};
  padding: 1rem;
  box-shadow: -5px 0px 31px 0px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors['base-red']};
`

export const CreateUserType = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
  }

  > p {
    align-self: flex-start;
    margin-bottom: 0%.5rem;
  }
`

interface CreateButtonTypes {
  variant: 'true' | 'false'
}

export const CreateUserTypeButton = styled(RadioGroup.Item)<CreateButtonTypes>`
  background: #fff;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: -5px 0px 31px 0px rgba(0, 0, 0, 0.1);

  color: ${(props) => props.theme.colors['base-text']};

  svg {
    color: ${({ variant, theme }) =>
      variant === 'true'
        ? `${theme.colors['base-green']}`
        : `${theme.colors['base-red']}`};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 1s;
    background-color: ${({ theme }) => theme.colors['base-green']};
    color: #fff;
  }

  &[data-state='checked'] {
    color: #fff;
    background: ${({ variant, theme }) =>
      variant === 'true'
        ? `${theme.colors['base-green']}`
        : `${theme.colors['base-red']}`};
  }

  svg {
    color: #d6d6d6;
  }
`
