import { useContext } from 'react'

import { DataStudentsContext } from '../contexts/DataSudentsContext'

export const useDataStudent = () => {
  const context = useContext(DataStudentsContext)
  return context
}
