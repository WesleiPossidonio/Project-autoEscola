import { useNavigate } from 'react-router-dom'

import ImgError from '../../../../assets/imageError.svg'
import { Button } from '../../../../Components/Button'
import { TextRegular, TitleText } from '../../../../Components/typography'
import { DataStudentsProps } from '../../../../contexts/DataSudentsContext'
import {
  CartDataStudent,
  ContainerPage,
  ContainerStudent,
  ContentButton,
  ContentDataStudent,
  HeaderContainer,
  ContainerDataStudent,
  ImageError,
} from '../../styled'

interface StudentsDataProps {
  dataStudent?: DataStudentsProps
}

export const StudentAproved = ({ dataStudent }: StudentsDataProps) => {
  const navigate = useNavigate()

  const handleNavigateToHome = () => {
    navigate('/')
  }

  const handleNavigate = () => {
    navigate('/alunos-aprovados')
  }

  return (
    <ContainerPage>
      <TitleText size="l" weight={700}>
        Sobre o Aluno
      </TitleText>
      <HeaderContainer>
        <ContentButton>
          <Button onClick={() => handleNavigate()}>Voltar</Button>
          <Button onClick={() => handleNavigateToHome()}>
            Voltar ao Inicio
          </Button>
        </ContentButton>
      </HeaderContainer>

      <ContainerStudent>
        <ContentDataStudent>
          <ContainerDataStudent>
            <CartDataStudent>
              <TitleText size="s" weight={700}>
                Dados do Aluno
              </TitleText>
              <div>
                <TitleText size="m" weight={700}>
                  Nome do Aluno
                </TitleText>
                <TextRegular size="l" color="text">
                  {dataStudent?.student_name}
                </TextRegular>
              </div>
              <div>
                <TitleText size="m" weight={700}>
                  CPF do Aluno
                </TitleText>
                <TextRegular size="l" color="text">
                  {dataStudent?.cpf}
                </TextRegular>
              </div>
            </CartDataStudent>

            {dataStudent?.class_indication !== '' &&
            dataStudent?.comments !== '' ? (
              <CartDataStudent>
                <div>
                  <TitleText size="m" weight={700}>
                    Aulas Adicionais Indicados
                  </TitleText>
                  <TextRegular size="l" color="text">
                    {dataStudent?.class_indication}
                  </TextRegular>
                </div>

                <div>
                  <TitleText size="m" weight={700}>
                    Observações
                  </TitleText>
                  <TextRegular size="l" color="text">
                    {dataStudent?.comments}
                  </TextRegular>
                </div>
              </CartDataStudent>
            ) : (
              <CartDataStudent optional="optional">
                <ImageError src={ImgError} />
                <TitleText size="s" weight={600}>
                  Ops... <br /> Dados em Branco
                </TitleText>
              </CartDataStudent>
            )}
          </ContainerDataStudent>

          <CartDataStudent className="CarContainer">
            <TitleText size="s" weight={700}>
              Dados do Aluno
            </TitleText>
            <div>
              <TitleText size="m" weight={700}>
                Nª do Renach
              </TitleText>
              <TextRegular size="l" color="text">
                {dataStudent?.renach}
              </TextRegular>
            </div>
            <div>
              <TitleText size="m" weight={700}>
                Data da Autorização
              </TitleText>
              <TextRegular size="l" color="text">
                {dataStudent?.release_date}
              </TextRegular>
            </div>
            <div>
              <TitleText size="m" weight={700}>
                Nome do Instrutor
              </TitleText>
              <TextRegular size="l" color="text">
                {dataStudent?.instructor}
              </TextRegular>
            </div>
            <div>
              <TitleText size="m" weight={700}>
                Nº da placa do Veículo
              </TitleText>
              <TextRegular size="l" color="text">
                {dataStudent?.vehicles}
              </TextRegular>
            </div>
          </CartDataStudent>
        </ContentDataStudent>
      </ContainerStudent>
    </ContainerPage>
  )
}
