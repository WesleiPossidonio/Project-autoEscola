import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'

import { useUser } from '../../Hooks/useUser'
import { TextRegular } from '../typography'
import {
  CloseButton,
  Content,
  CreateUserType,
  CreateUserTypeButton,
  Form,
  Input,
  Overlay,
} from './style'

const createUserFormSchema = zod.object({
  admin: zod
    .string()
    .nonempty('Por Favor, informe se o usuário será admin ou não'),
  name: zod.string().nonempty('Por favor, digite o nome do Usuário'),
  email: zod.string().email('Por Favor digite um email válido'),
  tel: zod.string().nonempty('Por Favor digite o numero de telefone'),
  password: zod.string().nonempty('Por Favor, digite a senha do Usuário'),
  cargo: zod.string().nonempty('Por favor, Digite o Cargo do Usuário'),
})

type CreateUserFormInputs = zod.infer<typeof createUserFormSchema>

interface CreateUserModalProps {
  setDisplayMenu?: Dispatch<SetStateAction<string>>
}

export const CreateUserModal = ({ setDisplayMenu }: CreateUserModalProps) => {
  const { handleCreateUser } = useUser()

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<CreateUserFormInputs>({
    resolver: zodResolver(createUserFormSchema),
    defaultValues: {
      admin: 'sim',
    },
  })

  const handleCreateNewUser = async (data: CreateUserFormInputs) => {
    const { admin, email, name, password, tel, cargo } = data

    const isAdmin = Boolean(admin)

    await handleCreateUser({
      email,
      admin: isAdmin,
      name,
      password,
      tel,
      cargo,
    })
    reset()
  }

  const handledisplayMenu = (data: string) => {
    setDisplayMenu && setDisplayMenu(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Cadastrar Usuário</Dialog.Title>
        <CloseButton>
          <X size={24} onClick={() => handledisplayMenu('')} />
        </CloseButton>
        <Form onSubmit={handleSubmit(handleCreateNewUser)}>
          <div>
            <Input
              type="text"
              placeholder="Nome"
              {...register('name')}
              error={errors.name?.message}
            />
            <TextRegular size="s" color="red">
              {errors.name?.message}
            </TextRegular>
          </div>

          <div>
            <Input
              type="text"
              placeholder="Email"
              {...register('email')}
              error={errors.email?.message}
            />
            <TextRegular size="s" color="red">
              {errors.email?.message}
            </TextRegular>
          </div>

          <div>
            <Input
              type="text"
              placeholder="Nº Telefone"
              {...register('tel')}
              error={errors.tel?.message}
            />
            <TextRegular size="s" color="red">
              {errors.tel?.message}
            </TextRegular>
          </div>

          <div>
            <Input
              type="text"
              placeholder="Cargo na Empresa"
              {...register('cargo')}
              error={errors.cargo?.message}
            />
            <TextRegular size="s" color="red">
              {errors.cargo?.message}
            </TextRegular>
          </div>

          <div>
            <Input
              type="text"
              placeholder="Senha"
              {...register('password')}
              error={errors.password?.message}
            />
            <TextRegular size="s" color="red">
              {errors.password?.message}
            </TextRegular>
          </div>

          <Controller
            control={control}
            name="admin"
            render={({ field }) => {
              const stringValue = field.value.toString()
              return (
                <CreateUserType
                  onValueChange={field.onChange}
                  value={stringValue}
                >
                  <TextRegular size="s">
                    O Usuário será Administrador?
                  </TextRegular>
                  <div>
                    <CreateUserTypeButton variant="true" value="true">
                      <ArrowCircleUp size={26} />
                      Sim
                    </CreateUserTypeButton>

                    <CreateUserTypeButton variant="false" value="false">
                      <ArrowCircleDown size={26} />
                      Não
                    </CreateUserTypeButton>
                  </div>
                </CreateUserType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </Form>
      </Content>
    </Dialog.Portal>
  )
}
