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
import { useState, ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { DataStudentsProps } from '../../../../contexts/DataSudentsContext'
import { useDataStudent } from '../../../../Hooks/useDataStudents'
import {
  ListRequerimentTable,
  TableContentList,
  TableHeader2,
  TableRowContentList,
} from './styled'

export const TableStudents = () => {
  const { filteredListSelectofDuda, listSelectedCar, searchListStudent } =
    useDataStudent()

  const navigate = useNavigate()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const [searchListSelected, setSearchListSelected] = useState<
    DataStudentsProps[]
  >([])
  const [listSelected, setListSelected] = useState<DataStudentsProps[]>([])

  useEffect(() => {
    if (searchListStudent) {
      const searchListStudents = filteredListSelectofDuda.filter((list) => {
        return (
          list.student_name.includes(searchListStudent) ||
          list.cpf.includes(searchListStudent) ||
          list.renach.includes(searchListStudent)
        )
      })
      setSearchListSelected(searchListStudents)
    } else {
      setSearchListSelected(filteredListSelectofDuda)
    }
  }, [filteredListSelectofDuda, searchListStudent])

  useEffect(() => {
    let motorcycleOne
    let motorcycleTwo
    let carOne
    let carTwo
    let carThrere
    let CarFour

    switch (listSelectedCar) {
      case 'Moto-1':
        motorcycleOne = searchListSelected.filter((list) => {
          return list.vehicles === 'Moto-1'
        })
        setListSelected(motorcycleOne)
        break

      case 'Moto-2':
        motorcycleTwo = searchListSelected.filter((list) => {
          return list.vehicles === 'Moto-2'
        })
        setListSelected(motorcycleTwo)
        break
      case 'Carro-1':
        carOne = searchListSelected.filter((list) => {
          return list.vehicles === 'Carro-1'
        })
        setListSelected(carOne)
        break
      case 'Carro-2':
        carTwo = searchListSelected.filter((list) => {
          return list.vehicles === 'Carro-2'
        })
        setListSelected(carTwo)
        break
      case 'Carro-3':
        carThrere = searchListSelected.filter((list) => {
          return list.vehicles === 'Carro-3'
        })
        setListSelected(carThrere)
        break

      case 'Carro-4':
        CarFour = searchListSelected.filter((list) => {
          return list.vehicles === 'Carro-4'
        })
        setListSelected(CarFour)
        break

      default:
        setListSelected(searchListSelected)
        break
    }
  }, [listSelectedCar, searchListSelected])

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 5))
    setPage(0)
  }

  const handleSelectAList = (id: string) => {
    const curatedList = listSelected.filter((data) => data.id === id)

    const listStudentSelected = Object.fromEntries(
      curatedList.map((item, index) => [`objeto${index + 1}`, item]),
    )

    navigate('/sobre-o-aluno', {
      state: listStudentSelected.objeto1,
    })
  }

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, listSelected.length - page * rowsPerPage)
  return (
    <ListRequerimentTable>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableHeader2>Nº Renach</TableHeader2>
              <TableHeader2>Nome do Aluno</TableHeader2>
              <TableHeader2>Nº CPF do Aluno</TableHeader2>
              <TableHeader2>Nome do Instrutor</TableHeader2>
              <TableHeader2>Data da Autorização</TableHeader2>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              (rowsPerPage > 0
                ? listSelected.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage,
                  )
                : listSelected,
              listSelected.map((data) => {
                return (
                  <TableRowContentList
                    key={data.id}
                    onClick={() => data.id && handleSelectAList(data.id)}
                  >
                    <TableContentList>{data.renach}</TableContentList>
                    <TableContentList>{data.student_name}</TableContentList>
                    <TableContentList>{data.cpf}</TableContentList>
                    <TableContentList>{data.instructor}</TableContentList>
                    <TableContentList>{data.release_date}</TableContentList>
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
          count={listSelected.length}
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
