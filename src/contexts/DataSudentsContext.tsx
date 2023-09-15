/* eslint-disable camelcase */
import {
  ReactNode,
  createContext,
  useCallback,
  useState,
  useEffect,
} from 'react'
import { toast } from 'react-toastify'

import api from '../services/api'

export interface DataStudentsProps {
  id: string
  student_name: string
  release_date: string
  cpf: string
  renach: string
  instructor: string
  vehicles: string
  class_indication?: string
  comments?: string
  passed_the_test: string | null
  payment_of_duda: string | null
}

interface GetDataStudentsProps {
  student_name: string
  release_date: string
  cpf: string
  renach: string
  instructor: string
  vehicles: string
  class_indication?: string
  comments?: string
  passed_the_test?: string
  payment_of_duda?: string
}

export interface UpdateDataTestStudents {
  id: string
  passed_the_test: string
  payment_of_duda: string
}

interface DataStudentsContextType {
  createStudents: (data: GetDataStudentsProps) => Promise<void>
  updateTestStudents: (data: UpdateDataTestStudents) => Promise<void>
  filteredSearchListStudent: (data: string) => void
  filterSelectedListCar: (data: string) => void
  setFilteredListSelectofDuda: (data: DataStudentsProps[]) => void
  listStudentsWithDudaPaid: DataStudentsProps[]
  listStudentsWithDudaPendents: DataStudentsProps[]
  listFailedStudents: DataStudentsProps[]
  listApprovedStudents: DataStudentsProps[]
  listAuthorizedStudents: DataStudentsProps[]
  dataListStudents: DataStudentsProps[]
  filteredListSelectofDuda: DataStudentsProps[]
  searchListStudent: string
  listSelectedCar: string
}

interface DataStudentsProviderProps {
  children: ReactNode
}

export const DataStudentsContext = createContext({} as DataStudentsContextType)

export const DataStudentsProvider = ({
  children,
}: DataStudentsProviderProps) => {
  const [dataListStudents, setDataListStudent] = useState<DataStudentsProps[]>(
    [],
  )

  const [listAuthorizedStudents, setListlistAuthorizedStudents] = useState<
    DataStudentsProps[]
  >([])

  const [listApprovedStudents, setListApprovedStudents] = useState<
    DataStudentsProps[]
  >([])

  const [listFailedStudents, setListFailedStudents] = useState<
    DataStudentsProps[]
  >([])

  const [listStudentsWithDudaPendents, setListStudentsWithDudaPendents] =
    useState<DataStudentsProps[]>([])

  const [listStudentsWithDudaPaid, setListStudentsWithDudaPaid] = useState<
    DataStudentsProps[]
  >([])

  const [filteredListSelectofDuda, setFilteredListSelectofDuda] =
    useState<DataStudentsProps[]>(dataListStudents)

  const [searchListStudent, setSearchListStudent] = useState('')
  const [listSelectedCar, setListSelectedCar] = useState('')

  useEffect(() => {
    const getListStudents = async () => {
      try {
        const listStudents = await api.get('students')
        const { data } = listStudents
        setDataListStudent(data)
      } catch (error) {
        console.error(error)
      }
    }

    getListStudents()
  }, [dataListStudents])

  useEffect(() => {
    const filteredListStudents = () => {
      const authorizedStudents = dataListStudents.filter(
        (list: DataStudentsProps) => {
          return (
            list.passed_the_test === null ||
            (list.passed_the_test === 'Reprovado' &&
              list.payment_of_duda === 'Pago')
          )
        },
      )
      setListlistAuthorizedStudents(authorizedStudents)

      const approvedStudentFilter = dataListStudents.filter(
        (list: DataStudentsProps) => {
          return list.passed_the_test === 'Aprovado'
        },
      )
      setListApprovedStudents(approvedStudentFilter)

      const failedStudents = dataListStudents.filter(
        (list: DataStudentsProps) => {
          return list.passed_the_test === 'Reprovado'
        },
      )
      setListFailedStudents(failedStudents)

      const dudaPendents = dataListStudents.filter(
        (list: DataStudentsProps) => {
          return list.passed_the_test === 'Pendente'
        },
      )
      setListStudentsWithDudaPendents(dudaPendents)

      const dudaPaid = dataListStudents.filter((list: DataStudentsProps) => {
        return list.passed_the_test === 'Pago'
      })
      setListStudentsWithDudaPaid(dudaPaid)
    }

    filteredListStudents()
  }, [dataListStudents])

  const createStudents = useCallback(async (data: GetDataStudentsProps) => {
    try {
      const response = await toast.promise(api.post('createStudent', data), {
        pending: 'Verificando seus dados',
        success: 'Autorização Criada com Sucesso!',
        error: 'Ops! Verifique os Dados Digitados',
      })

      setDataListStudent((prevState) => [...prevState, response.data])
    } catch (error) {
      console.log(error)
    }
  }, [])

  const updateTestStudents = useCallback(
    async (data: UpdateDataTestStudents) => {
      const { passed_the_test, payment_of_duda } = data

      const listUpdate = {
        passed_the_test,
        payment_of_duda,
      }

      try {
        const response = await toast.promise(
          api.put(`updateStudent/${data.id}`, listUpdate),
          {
            pending: 'Verificando seus dados',
            success: 'Atualização efetuada com Sucesso!',
            error: 'Ops! Verifique os Dados Digitados',
          },
        )
        setDataListStudent((prevState) => [...prevState, response.data])
      } catch (error) {
        console.log(error)
      }
    },
    [],
  )

  const filteredSearchListStudent = (data: string) => {
    setSearchListStudent(data)
  }

  const filterSelectedListCar = (data: string) => {
    setListSelectedCar(data)
  }

  return (
    <DataStudentsContext.Provider
      value={{
        createStudents,
        filteredSearchListStudent,
        filterSelectedListCar,
        updateTestStudents,
        setFilteredListSelectofDuda,
        listStudentsWithDudaPaid,
        listStudentsWithDudaPendents,
        listFailedStudents,
        listApprovedStudents,
        listAuthorizedStudents,
        dataListStudents,
        searchListStudent,
        listSelectedCar,
        filteredListSelectofDuda,
      }}
    >
      {children}
    </DataStudentsContext.Provider>
  )
}
