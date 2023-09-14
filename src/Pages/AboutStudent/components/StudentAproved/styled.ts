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
