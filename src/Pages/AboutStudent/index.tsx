import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { DataStudentsProps } from '../../contexts/DataSudentsContext'
import { AuthorizedStudent } from './components/AboutStudent'
import { StudentAproved } from './components/StudentAproved'
import { StudentDudaPaind } from './components/StudentDudaPaind'
import { StudentDudaPending } from './components/StudentDudaPending'
import { StudentFailed } from './components/StudentFailed'
import { ContainerPage } from './styled'

interface LocationProps {
  state: DataStudentsProps
}

export const AboutStudent = () => {
  const [authorizedStudent, setAuthorizedStudent] =
    useState<DataStudentsProps>()
  const [approvedStudent, setAprovedStudent] = useState<DataStudentsProps>()
  const [failedStudent, setFailedStudent] = useState<DataStudentsProps>()
  const [studentDudaPaid, setStudentDudaPaid] = useState<DataStudentsProps>()
  const [studentDudaPending, setStudentDudaPending] =
    useState<DataStudentsProps>()

  const { state } = useLocation() as unknown as LocationProps

  useEffect(() => {
    if (state) {
      if (
        (state.passed_the_test === null && state.payment_of_duda === null) ||
        (state.passed_the_test === 'Reprovado' &&
          state.payment_of_duda === 'Pago')
      ) {
        setAuthorizedStudent(state)
      }

      if (state.passed_the_test === 'Aprovado') {
        setAprovedStudent(state)
      }

      if (state.passed_the_test === 'Reprovado') {
        setFailedStudent(state)
      }

      if (state.payment_of_duda === 'Pago') {
        setStudentDudaPaid(state)
      }

      if (state.payment_of_duda === 'Pendente') {
        setStudentDudaPending(state)
      }
    }
  }, [state])

  return (
    <ContainerPage>
      {(authorizedStudent && (
        <AuthorizedStudent dataStudent={authorizedStudent} />
      )) ||
        (approvedStudent && <StudentAproved dataStudent={approvedStudent} />) ||
        (failedStudent && <StudentFailed dataStudent={failedStudent} />) ||
        (studentDudaPaid && (
          <StudentDudaPaind dataStudent={studentDudaPaid} />
        )) ||
        (studentDudaPending && (
          <StudentDudaPending dataStudent={studentDudaPending} />
        ))}
    </ContainerPage>
  )
}
