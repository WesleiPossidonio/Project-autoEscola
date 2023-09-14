import {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import api from '../services/api'

interface UserLoginProps {
  email: string
  password: string
}

export interface ResponseDataUser {
  admin: boolean
  id: string
  email: string
  name: string
  token: string
}

interface CreaterUser {
  admin: boolean
  name: string
  password: string
  email: string
  tel: string
  cargo: string
}

interface UpdatePasswordProps {
  email: string
  password: string
}

interface UserContextType {
  handleCreateUser: (data: CreaterUser) => Promise<void>
  handleLoginUser: (data: UserLoginProps) => Promise<void>
  updatePassword: (data: UpdatePasswordProps) => Promise<void>
  userDataLogin: ResponseDataUser
}

interface UserContextProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const navigate = useNavigate()
  const [userDataLogin, setUserDataLogin] = useState<ResponseDataUser>(
    {} as ResponseDataUser,
  )

  const handleLoginUser = useCallback(
    async (data: UserLoginProps) => {
      const { email, password } = data

      try {
        const response = await toast.promise(
          api.post('sessions', { email, password }),
          {
            pending: 'Verificando seus dados',
            success: 'Seja bem-vindo(a)!',
            error: 'Verifique seu email e senha 🤯',
          },
        )
        const { data } = response
        await localStorage.setItem(
          'autoEscola:userData1.0',
          JSON.stringify(data),
        )

        setUserDataLogin(data)

        setTimeout(() => {
          navigate('/')
        }, 1000)
      } catch (error) {
        console.log(error)
      }
    },
    [navigate],
  )

  useEffect(() => {
    const LoadDataUser = async () => {
      const dataUserLogin = await localStorage.getItem('autoEscola:userData1.0')

      dataUserLogin && setUserDataLogin(JSON.parse(dataUserLogin))
    }

    LoadDataUser()
  }, [])

  const handleCreateUser = useCallback(async (data: CreaterUser) => {
    const { password, admin, email, name, tel, cargo } = data

    try {
      const createUserResponse = await toast.promise(
        api.post('users', { password, admin, email, name, tel, cargo }),
        {
          pending: 'Enviando Dados',
          success: 'Usuário Criado com Sucesso!',
          error: 'Usuário existente Verifique seu email e senha 🤯',
        },
      )

      console.log(createUserResponse.data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const updatePassword = useCallback(
    async (data: UpdatePasswordProps) => {
      const { email, password } = data

      try {
        const response = await toast.promise(
          api.post('confirmMail', { email, password }),
          {
            pending: 'Verificando seus dados',
            success: 'Email Encontrado!',
            error: 'E-mail não encontrado digite novamente 🤯',
          },
        )
        const { data } = response
        await localStorage.setItem(
          'autoEscola:UserConfirmEmail',
          JSON.stringify(data),
        )

        setUserDataLogin(data)

        setTimeout(() => {
          navigate('/')
        }, 1000)
      } catch (error) {
        console.log(error)
      }
    },
    [navigate],
  )

  return (
    <UserContext.Provider
      value={{
        handleLoginUser,
        userDataLogin,
        handleCreateUser,
        updatePassword,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
