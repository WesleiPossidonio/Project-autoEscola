import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const ContainerAuthorizedStudent = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const HeaderContent = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;

  margin-top: 1rem;
`

export const ContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const ContainerStudent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 4rem;
`
export const ContentDataStudent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  .CarContainer {
    height: 32rem;
  }
`

interface CartDataStudentProps {
  optional?: string
}

export const CartDataStudent = styled.div<CartDataStudentProps>`
  width: 35rem;
  min-height: max-content;

  display: flex;
  flex-direction: ${({ optional }) => (optional ? 'none' : 'column')};
  align-items: ${({ optional }) => (optional ? 'flex-end' : 'center')};
  justify-content: ${({ optional }) => (optional ? 'space-around' : 'center')};
  gap: 2rem;

  padding: 2rem;

  border-radius: 10px;
  box-shadow: -5px 0px 31px 0px rgba(0, 0, 0, 0.1);

  background-color: ${({ theme }) => theme.colors['bg-home']};

  div {
    width: 100%;
  }

  > h1 {
    margin: 0;
  }
`

export const ImageError = styled.img`
  width: 13rem;
  height: 13rem;
`

export const ContainerForm = styled.form`
  width: 72rem;
  height: max-content;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: -5px 0px 31px 0px rgba(0, 0, 0, 0.1);

  background-color: ${({ theme }) => theme.colors['bg-home']};

  button {
    align-self: flex-end;
  }
`
export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;

  margin-top: 2rem;
`

export const ContainerDataStudent = styled(ContentForm)`
  gap: 2rem;
  margin-top: 0;
`

interface InputProps {
  error?: string
  btnDisapproved?: string
  variant?: 'true' | 'false'
}

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
`

export const ContainerInput = styled(RadioGroup.Root)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const InputAboutStudent = styled(RadioGroup.Item)<InputProps>`
  width: 8.5rem;
  height: 3.5rem;

  border: none;
  border-radius: 6px;

  font-size: 1rem;
  font-weight: 600;

  color: ${({ theme }) => theme.colors['base-text']};

  background-color: ${({ theme }) => theme.colors['bg-main']};

  cursor: pointer;

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
`
