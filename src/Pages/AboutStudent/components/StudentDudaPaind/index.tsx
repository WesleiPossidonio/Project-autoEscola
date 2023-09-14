import { DataStudentsProps } from '../../../../contexts/DataSudentsContext'

interface StudentsDataProps {
  dataStudent?: DataStudentsProps
}

export const StudentDudaPaind = ({ dataStudent }: StudentsDataProps) => {
  return (
    <div>
      <p>{dataStudent?.student_name}</p>
    </div>
  )
}
