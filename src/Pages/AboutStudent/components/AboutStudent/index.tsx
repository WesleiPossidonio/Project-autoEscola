/* eslint-disable camelcase */
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'

import ImgError from '../../../../assets/imageError.svg'
import { Button } from '../../../../Components/Button'
import { TextRegular, TitleText } from '../../../../Components/typography'
import { DataStudentsProps } from '../../../../contexts/DataSudentsContext'
import { useDataStudent } from '../../../../Hooks/useDataStudents'
import {
  CartDataStudent,
  ContainerDataStudent,
  ContainerForm,
  ContainerInput,
  ContainerPage,
  ContainerStudent,
  ContentButton,
  ContentDataStudent,
  ContentForm,
  ContentInput,
  HeaderContainer,
  ImageError,
  InputAboutStudent,
} from '../../styled'

interface StudentsDataProps {
  dataStudent: DataStudentsProps
}

const updateStudentFormSchema = zod.object({
  passed_the_test: zod
    .string()
    .nonempty('Por gentileza, Informe se o Aluno foi aprovado ou não.'),
  payment_of_duda: zod
    .string()
    .nonempty('Por gentileza, Informe se o Aluno pagou o Duda.'),
})

type updateStudentsFormInputs = zod.infer<typeof updateStudentFormSchema>

export const AuthorizedStudent = ({ dataStudent }: StudentsDataProps) => {
  const { control, handleSubmit, reset } = useForm<updateStudentsFormInputs>({
    resolver: zodResolver(updateStudentFormSchema),
  })

  const { updateTestStudents, menuIsVisible } = useDataStudent()
  const navigate = useNavigate()

  const handlePassedTheTest = (data: updateStudentsFormInputs) => {
    const { passed_the_test, payment_of_duda } = data
    const id = dataStudent.id

    const newListStudents = { id, passed_the_test, payment_of_duda }

    updateTestStudents(newListStudents)

    console.log(data)
    reset()
  }

  const handleNavigateToHome = () => {
    navigate('/')
  }

  const handleNavigate = () => {
    navigate('/sobre-o-aluno')
  }

  return (
    <ContainerPage menuIsVisible={menuIsVisible}>
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

        <ContainerForm onSubmit={handleSubmit(handlePassedTheTest)}>
          <ContentForm>
            <TitleText size="m" weight={600}>
              Terminar o Cadastro
            </TitleText>
            <ContentInput>
              <TitleText>Qual o Estado da Avaliação do Aluno?</TitleText>

              <Controller
                control={control}
                name="passed_the_test"
                render={({ field }) => {
                  return (
                    <ContainerInput
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <InputAboutStudent value="Aprovado" variant="true">
                        Aprovado
                      </InputAboutStudent>

                      <InputAboutStudent value="Reprovado" variant="false">
                        Reprovado
                      </InputAboutStudent>
                    </ContainerInput>
                  )
                }}
              />
            </ContentInput>

            <ContentInput>
              <TitleText>O Pagamento do Duda foi Efetuado?</TitleText>

              <Controller
                control={control}
                name="payment_of_duda"
                render={({ field }) => {
                  return (
                    <ContainerInput
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <InputAboutStudent value="Pago" variant="true">
                        Sim
                      </InputAboutStudent>

                      <InputAboutStudent value="Pendente" variant="false">
                        Não
                      </InputAboutStudent>
                    </ContainerInput>
                  )
                }}
              />
            </ContentInput>
          </ContentForm>

          <Button type="submit">Enviar</Button>
        </ContainerForm>
      </ContainerStudent>
    </ContainerPage>
  )
}
