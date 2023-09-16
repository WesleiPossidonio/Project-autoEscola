import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8rem;

  background-color: ${({ theme }) => theme.colors['bg-main']};
`

export const HeaderLogin = styled.img`
  width: 12rem;
  margin: 4rem;
  margin-top: -22rem;
  align-self: flex-start;
`

export const Content = styled.div`
  width: min(35rem, 88vw);
  height: min(40rem, 70vh);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors['bg-home']};

  padding: 1rem;
  border: none;
  border-radius: 10px;

  box-shadow: -5px 0px 31px 0px rgba(0, 0, 0, 0.1);
`

export const TitleLogin = styled.h1`
  font-size: 2rem;
  font-weight: bold;

  margin-bottom: 2rem;
`

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  margin-top: 5rem;
`

export const ContentInput = styled.div`
  width: 100%;

  p {
    margin-top: 0.2rem;
  }
`

interface InputProps {
  error?: string
}

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 2rem;

  background-color: transparent;

  border: none;
  border-bottom: ${({ error, theme }) =>
    error
      ? `2px solid ${theme.colors['base-red']}`
      : `2px solid ${theme.colors['base-text']}`};

  padding: 0.5rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-text']};
  }

  &:focus {
    border-bottom: 2px solid green;
  }
`

export const Label = styled.label`
  font-size: 0.854rem;
  color: ${({ theme }) => theme.colors['base-text']};
`

export const Button = styled.button`
  width: 100%;
  height: 3.5rem;

  padding: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 6px;

  background-color: green;

  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;

  margin-top: 1.3rem;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

export const ContentLinks = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  margin-top: 1rem;
  margin-bottom: 4rem;
`

export const ContentCheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > input {
    width: 1rem;
  }
`

export const LinkPasswordContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`

export const LinkPassword = styled.a`
  color: #fff;
  cursor: pointer;
  font-size: 0.854rem;
`
