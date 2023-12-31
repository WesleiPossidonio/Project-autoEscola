import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'

import LogoMotocar from '../../assets/LOGO_MOTOCAR.png'
import { TextRegular, TitleText } from '../../Components/typography'
import { useUser } from '../../Hooks/useUser'
import {
  Button,
  Container,
  Content,
  ContentInput,
  ContentLinks,
  Form,
  HeaderLogin,
  Input,
  LinkPassword,
  LinkPasswordContent,
} from './styled'

const confirmOrderLoginValidationSchema = zod.object({
  email: zod.string().email('Digite o seu E-mail Válido'),
  password: zod.string().min(6, 'Informe a Senha').max(6, 'Digite 6 digitos'),
})

export type OrderData = zod.infer<typeof confirmOrderLoginValidationSchema>

type ConfirmOrderFormLoginData = OrderData

export const Login = () => {
  const { handleLoginUser } = useUser()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConfirmOrderFormLoginData>({
    resolver: zodResolver(confirmOrderLoginValidationSchema),
  })

  const handleConfirmOrder = (data: ConfirmOrderFormLoginData) => {
    handleLoginUser(data)

    reset()
  }

  const handleNavigateUpdatePassword = () => {
    navigate('/atualizar-senha')
  }

  return (
    <Container>
      <HeaderLogin src={LogoMotocar} />

      <Content>
        <TitleText color="text-login" size="l">
          Fazer Login
        </TitleText>

        <Form onSubmit={handleSubmit(handleConfirmOrder)}>
          <ContentInput>
            <Input
              type="text"
              placeholder="E-mail"
              {...register('email')}
              error={errors.email?.message}
            />
            <TextRegular color="red" weight={700}>
              {errors.email?.message}
            </TextRegular>
          </ContentInput>

          <ContentInput>
            <Input
              type="password"
              placeholder="Senha"
              {...register('password')}
              error={errors.password?.message}
            />
            <TextRegular color="red" weight={700}>
              {errors.password?.message}
            </TextRegular>
          </ContentInput>

          <Button type="submit">Acessar</Button>
        </Form>

        <ContentLinks>
          <LinkPasswordContent>
            <TextRegular color="text-login">Esqueci a Senha?</TextRegular>
            <LinkPassword onClick={() => handleNavigateUpdatePassword()}>
              Clicar Aqui
            </LinkPassword>
          </LinkPasswordContent>
        </ContentLinks>
      </Content>
    </Container>
  )
}
