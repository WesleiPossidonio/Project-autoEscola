import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
} from '@mui/material'
import { useState, ChangeEvent } from 'react'

import { useUser } from '../../../../Hooks/useUser'
import {
  ListRequerimentTable,
  TableContentList,
  TableHeader2,
  TableRowContentList,
} from './styled'

export const TableDataUsers = () => {
  const { dataListUsers } = useUser()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 5))
    setPage(0)
  }

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, dataListUsers.length - page * rowsPerPage)
  return (
    <ListRequerimentTable>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableHeader2>Nome do Usuário</TableHeader2>
              <TableHeader2>E-mail do Usuário</TableHeader2>
              <TableHeader2>Nº Telefone</TableHeader2>
              <TableHeader2>Função</TableHeader2>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              (rowsPerPage > 0
                ? dataListUsers.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage,
                  )
                : dataListUsers,
              dataListUsers.map((data) => {
                return (
                  <TableRowContentList key={data.id}>
                    <TableContentList>{data.name}</TableContentList>
                    <TableContentList>{data.email}</TableContentList>
                    <TableContentList>{data.tel}</TableContentList>
                    <TableContentList>{data.cargo}</TableContentList>
                  </TableRowContentList>
                )
              }))
            }
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={dataListUsers.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage="Itens por página:"
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </ListRequerimentTable>
  )
}
