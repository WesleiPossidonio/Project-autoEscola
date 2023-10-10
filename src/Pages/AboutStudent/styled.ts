import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

interface InputProps {
  error?: string
  btnDisapproved?: string
  variant?: 'true' | 'false'
}

interface ContainerPageProps {
  menuIsVisible: boolean
}

export const ContainerPage = styled.section<ContainerPageProps>`
  width: ${({ menuIsVisible }) => (menuIsVisible === false ? '100%' : '80%')};
  min-height: 100vh;

  position: fixed;
  top: 6rem;
  bottom: 0;
  right: 0;

  padding: 5rem 2rem;

  background-color: ${({ theme }) => theme.colors['bg-main']};

  > h1 {
    padding: 0 5rem;
  }

  @media (max-width: 1023px) {
    width: 100%;
    padding: 2rem;
    font-size: 1.5rem;

    > h1 {
      padding: 0;
    }
  }

  @media (max-width: 767px) {
    padding: 4rem 1rem;
    position: static;
    top: 0;

    > h1 {
      font-size: 1.5rem;
    }
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 5rem;

  padding: 1rem 5rem;

  @media (max-width: 1023px) {
    padding: 2rem 1rem;
    gap: 3rem;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

export const ContainerStudent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin-top: 4rem;

  @media (max-width: 600px) {
    margin-top: 2rem;
  }
`

export const ContentDataStudent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 1023px) {
    justify-content: space-around;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.5rem;

  margin-top: 2rem;

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const ContainerDataStudent = styled(ContentForm)`
  gap: 2rem;
  margin-top: 0;
`
interface CartDataStudentProps {
  optional?: string
}

export const CartDataStudent = styled.div<CartDataStudentProps>`
  width: min(35rem, 35vw);
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

  @media (max-width: 1023px) {
    width: 100%;
  }
`

export const ContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

export const Button = styled.button`
  width: 13rem;

  border: none;
  border-radius: 5px;
  padding: 1.3rem;

  font-size: 1rem;
  font-weight: 600;

  color: ${({ theme }) => theme.colors['base-text-login']};

  background-color: ${({ theme }) => theme.colors['base-green']};

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export const ContainerContent = styled.div`
  width: 100%;
  padding: 0 5rem;

  @media (max-width: 1023px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`
export const ImageError = styled.img`
  width: min(13rem, 17.5vw);
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

  @media (max-width: 1500px) {
    width: 100%;
  }

  @media (max-width: 767px) {
    #submit {
      margin-top: 2rem;
      width: 100%;
    }

    h1 {
      font-size: 1.2rem;
    }
  }
`
export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;

  @media (max-width: 767px) {
    h1 {
      font-size: 1.1rem;
    }
  }
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
