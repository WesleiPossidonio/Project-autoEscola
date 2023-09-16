import { Routes, Route } from 'react-router-dom'

import { AboutStudent } from '../Pages/AboutStudent'
import { AprovedStudentsPage } from '../Pages/ApprovedStudents'
import { AuthorizedStudents } from '../Pages/AuthorizedStudents'
import { ConfirmPassowrd } from '../Pages/ConfirmPassword'
import { FailedStudentsPage } from '../Pages/FailedStudents'
import { CreatedStudents } from '../Pages/FormCreateStudent'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
import { PaimentDuda } from '../Pages/PaymentDuda'
import { PrivateRoutes } from './PrivateRoutes'

export const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/atualizar-senha" element={<ConfirmPassowrd />} />

      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/autorizar-alunos" element={<CreatedStudents />} />
        <Route path="/alunos-aprovados" element={<AprovedStudentsPage />} />
        <Route path="/alunos-reprovados" element={<FailedStudentsPage />} />
        <Route path="/sobre-o-aluno" element={<AboutStudent />} />
        <Route path="/pagamento-duda" element={<PaimentDuda />} />
        <Route path="/alunos-autorizados" element={<AuthorizedStudents />} />
      </Route>
    </Routes>
  )
}
