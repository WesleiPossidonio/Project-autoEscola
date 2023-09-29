import { TableContainer, TableCell, TableRow } from '@mui/material'
import { styled as muiStyled } from '@mui/material/styles'
import { styled } from 'styled-components'

export const ListRequerimentTable = styled(TableContainer)`
  width: 59rem !important;
  height: max-content;
  max-height: 550px;

  margin: 0 auto;
  margin-top: 2rem;

  background: #fff;
  border: none;
  border-radius: 6px;
  margin-bottom: 1rem;
  box-shadow: -5px 0px 31px 0px rgba(0, 0, 0, 0.1);

  @media (max-width: 1288px) {
    width: 47rem !important;
  }

  @media (max-width: 1023px) {
    width: 100% !important;
  }

  @media (max-width: 700px) {
    .table {
      th {
        text-align: center;
        padding: 0.75rem;
      }
    }
  }
`

export const TableHeader2 = muiStyled(TableCell)({
  fontSize: '1rem',
  fontWeight: '600',
  border: 'none',
  color: '#A1A1AA',
}) as typeof TableCell

export const TableRowContentList = muiStyled(TableRow)({
  '&:hover': {
    backgroundColor: '#f2f2f2',
    cursor: 'pointer',
  },
}) as typeof TableRow

export const TableContentList = muiStyled(TableCell)({
  marginBottom: '2rem',
}) as typeof TableCell
