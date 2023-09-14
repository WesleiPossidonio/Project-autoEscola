import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { useDataStudent } from '../../Hooks/useDataStudents'
import { Button } from '../Button'
import { Form, Input } from './styled'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export const InputSearch = () => {
  const { filteredSearchListStudent } = useDataStudent()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchStudents = (data: SearchFormInputs) => {
    filteredSearchListStudent(data.query)
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(handleSearchStudents)}>
      <Input placeholder="Pesquise um Aluno" {...register('query')} />
      <Button type="submit" disabled={isSubmitting}>
        Buscar
      </Button>
    </Form>
  )
}
