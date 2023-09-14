import { DataStudentsProps } from '../../../../contexts/DataSudentsContext'

interface StudentsDataProps {
  dataStudent?: DataStudentsProps
}

export const StudentDudaPending = ({ dataStudent }: StudentsDataProps) => {
  return (
    <div>
      <p>{dataStudent?.student_name}</p>
    </div>
  )
}
