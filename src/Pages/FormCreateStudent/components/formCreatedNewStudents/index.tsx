import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import { Button } from '../../../../Components/Button'
import { TextRegular, TitleText } from '../../../../Components/typography'
import { useDataStudent } from '../../../../Hooks/useDataStudents'
import {
  ContainerInput,
  ContentInput,
  ContentInputSchool,
  Form,
  Input,
  Select,
  TextArea,
} from './styled'

const createdNewStudentsFoprmSchema = zod.object({
  student_name: zod.string().nonempty('Por gentileza, digite o nome do aluno.'),
  cpf: zod
    .string()
    .min(11, 'Por gentileza, Digite o Cpf corretamente')
    .max(11, 'Por gentileza, Digite o Cpf corretamente')
    .nonempty('Por gentileza, Digite o Cpf'),
  release_date: zod.string().nonempty('Por gentileza, Escolha uma data'),
  vehicles: zod
    .string()
    .nonempty('Por gentileza, Selecione a placa do Carro / Moto'),
  renach: zod.string().nonempty('Por gentileza, Digite o número do renach'),
  instructor: zod.string().nonempty('Por gentileza, Escolha o Instrutor'),
  class_indication: zod.string().optional(),
  comments: zod.string().optional(),
})

type createNewStudentsFormInputs = zod.infer<
  typeof createdNewStudentsFoprmSchema
>

export const FormCreatedStudents = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createNewStudentsFormInputs>({
    resolver: zodResolver(createdNewStudentsFoprmSchema),
  })

  const { createStudents } = useDataStudent()

  const handleCreatedNewStudents = (data: createNewStudentsFormInputs) => {
    createStudents(data)
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(handleCreatedNewStudents)}>
      <TitleText size="m" weight={600} id="title">
        Preencha o Formulário
      </TitleText>

      <ContainerInput>
        <div>
          <ContentInput>
            <TitleText size="s" weight={600}>
              Dados do Aluno
            </TitleText>
            <div id="name">
              <Input
                type="text"
                placeholder="Digite o Nome do Aluno"
                {...register('student_name')}
                error={errors.student_name?.message}
              />
              <TextRegular color="red" weight={600}>
                {errors.student_name?.message}
              </TextRegular>
            </div>

            <div id="cpf">
              <Input
                type="text"
                placeholder="Digite o cpf do Aluno"
                {...register('cpf')}
                error={errors.cpf?.message}
              />
              <TextRegular color="red" weight={600}>
                {errors.cpf?.message}
              </TextRegular>
            </div>
          </ContentInput>

          <ContentInput>
            <TitleText size="s" weight={600}>
              Dados Opcionais
            </TitleText>
            <Input
              type="text"
              id="classRecommendations"
              placeholder="Indique mais aulas, caso o aluno precise"
              {...register('class_indication')}
              error={errors.class_indication?.message}
            />

            <TextArea
              id="comments"
              placeholder="Digite uma observação"
              {...register('comments')}
              error={errors.comments?.message}
            ></TextArea>
          </ContentInput>
        </div>

        <ContentInputSchool>
          <TitleText size="s" weight={600}>
            Dados da Escola
          </TitleText>
          <div>
            <Input
              type="date"
              id="date"
              placeholder="Digite a data da autorização"
              {...register('release_date')}
              error={errors.release_date?.message}
            />
            <TextRegular color="red" weight={600}>
              {errors.release_date?.message}
            </TextRegular>
          </div>

          <div>
            <Input
              type="text"
              id="numberRenach"
              placeholder="Digite o número do renach"
              {...register('renach')}
              error={errors.renach?.message}
            />
            <TextRegular color="red" weight={600}>
              {errors.renach?.message}
            </TextRegular>
          </div>

          <div id="selectVehicle">
            <Select {...register('vehicles')} error={errors.vehicles?.message}>
              <option selected disabled value="">
                Selecione a placa do Carro / Moto
              </option>
              <option value="Moto-1">Moto 1</option>
              <option value="Moto-2">Moto 2</option>
              <option value="Carro-1">Carro 1</option>
              <option value="Carro-2">Carro 2</option>
              <option value="Carro-3">Carro 3</option>
            </Select>
            <TextRegular color="red" weight={600}>
              {errors.vehicles?.message}
            </TextRegular>
          </div>

          <div id="instructor">
            <Select
              {...register('instructor')}
              error={errors.instructor?.message}
            >
              <option selected disabled value="">
                Selecione o Instrutor
              </option>
              <option value="Erick Patrocinio">Erick Patrocinio</option>
              <option value="Leonardo Sena">Leonardo Sena</option>
              <option value="Maria Victoria Cicarone">
                Maria Victoria Cicarone
              </option>
              <option value="Franciscarla Moreira">Franciscarla Moreira</option>
              <option value="Luiz Claudio">Luiz Claudio</option>
              <option value="Rafaelle Cotrim">Rafaelle Cotrim</option>
              <option value="Thiago Mendeiros">Thiago Mendeiros</option>
            </Select>
            <TextRegular color="red" weight={600}>
              {errors.instructor?.message}
            </TextRegular>
          </div>
        </ContentInputSchool>
      </ContainerInput>

      <Button type="submit">Autorizar Aluno</Button>
    </Form>
  )
}
