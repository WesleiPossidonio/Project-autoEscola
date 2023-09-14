import { ReactNode } from 'react'

import { DataStudentsProvider } from './DataSudentsContext'
import { UserContextProvider } from './UserContext'

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <DataStudentsProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </DataStudentsProvider>
  )
}
