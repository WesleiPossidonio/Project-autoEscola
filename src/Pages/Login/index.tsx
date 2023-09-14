import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import LogoMotocar from '../../assets/LOGO_MOTOCAR.png'
import { TextRegular, TitleText } from '../../Components/typography'
import { useUser } from '../../Hooks/useUser'
import {
  Button,
  Container,
  Content,
  ContentCheckBox,
  ContentLinks,
  Form,
  HeaderLogin,
  Input,
  LinkPassword,
  LinkPasswordContent,
} from './styled'

const confirmOrderLoginValidationSchema = zod.object({
  email: zod.string().min(3, 'Informe o nome do usuário'),
  password: zod.string().min(4, 'Informe a Senha'),
})

export type OrderData = zod.infer<typeof confirmOrderLoginValidationSchema>

type ConfirmOrderFormLoginData = OrderData

export const Login = () => {
  const { handleLoginUser } = useUser()

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

  return (
    <Container>
      <HeaderLogin src={LogoMotocar} />

      <Content>
        <TitleText color="text-login" size="l">
          Fazer Login
        </TitleText>

        <Form onSubmit={handleSubmit(handleConfirmOrder)}>
          <Input
            type="text"
            placeholder="E-mail"
            {...register('email')}
            error={errors.email?.message}
          />
          <Input
            type="password"
            placeholder="Senha"
            {...register('password')}
            error={errors.password?.message}
          />

          <Button type="submit">Acessar</Button>
        </Form>

        <ContentLinks>
          <ContentCheckBox>
            <Input type="checkbox" />
            <TextRegular color="text-login">Lembrar de Mim</TextRegular>
          </ContentCheckBox>

          <LinkPasswordContent>
            <TextRegular color="text-login">Esqueci a Senha?</TextRegular>
            <LinkPassword href="#" target="_blank">
              Clicar Aqui
            </LinkPassword>
          </LinkPasswordContent>
        </ContentLinks>
      </Content>
    </Container>
  )
}
