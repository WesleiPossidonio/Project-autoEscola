import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { useDataStudent } from '../../Hooks/useDataStudents'

export function BasicSelect() {
  const { filterSelectedListCar, listSelectedCar } = useDataStudent()

  const handleChange = (data: SelectChangeEvent) => {
    filterSelectedListCar(data.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Selecione o veículo
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={listSelectedCar}
          label="Selecione o veículo"
          onChange={handleChange}
        >
          <MenuItem value="Moto-1">Moto 1</MenuItem>
          <MenuItem value="Moto-2">Moto 2</MenuItem>
          <MenuItem value="Carro-1">Carro 1</MenuItem>
          <MenuItem value="Carro-2">Carro 2</MenuItem>
          <MenuItem value="Carro-3">Carro 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
