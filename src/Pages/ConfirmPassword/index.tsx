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
  ContentInput,
  Form,
  HeaderLogin,
  Input,
} from './styled'

const confirmOrderLoginValidationSchema = zod
  .object({
    email: zod
      .string()
      .nonempty('O E-mail é Obrigatório')
      .email('Digite o seu E-mail Válido'),
    password: zod
      .string()
      .min(6, 'A senha deve conter 6 digitos')
      .max(6, 'A senha deve conter 6 digitos')
      .nonempty('Digite sua Senha'),
    confirmPassword: zod
      .string()
      .min(6, 'Confirme sua senha')
      .max(6, 'Confirme sua senha')
      .nonempty('Confirme sua Senha'),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'As senhas não estão iguais, Digite Novamente',
    path: ['confirmPassword'],
  })

export type OrderData = zod.infer<typeof confirmOrderLoginValidationSchema>

type ConfirmOrderFormLoginData = OrderData

export const ConfirmPassowrd = () => {
  const { updatePassword } = useUser()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ConfirmOrderFormLoginData>({
    resolver: zodResolver(confirmOrderLoginValidationSchema),
  })

  const handleConfirmOrder = (data: ConfirmOrderFormLoginData) => {
    updatePassword(data)

    reset()
  }

  return (
    <Container>
      <HeaderLogin src={LogoMotocar} />

      <Content>
        <TitleText color="text" size="l">
          Atualizar Senha
        </TitleText>

        <Form onSubmit={handleSubmit(handleConfirmOrder)}>
          <ContentInput>
            <Input
              type="text"
              placeholder="Digite o seu E-mail de Acesso"
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
              placeholder="Digite sua nova Senha"
              {...register('password')}
              error={errors.password?.message}
            />
            <TextRegular color="red" weight={700}>
              {errors.password?.message}
            </TextRegular>
          </ContentInput>

          <ContentInput>
            <Input
              type="password"
              placeholder="Confirme sua senha"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
            <TextRegular color="red" weight={700}>
              {errors.confirmPassword?.message}
            </TextRegular>
          </ContentInput>

          <Button type="submit">Atualizar Senha</Button>
        </Form>
      </Content>
    </Container>
  )
}
