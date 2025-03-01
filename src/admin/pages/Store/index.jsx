import { useState } from 'react'
import { Box, Button, Stack, Typography, Select, MenuItem, 
  TextField, Table,TableContainer,TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'
import { Add, ArrowForwardOutlined } from '@mui/icons-material'
function Store() {
  const [age, setAge] = useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }
  return (
    <Box>
      {/* NAVIGATION */}
      <Box sx={{ margin:'1rem 0' }}>
        <Stack direction={'row'} alignItems={'center'} sx={{ marginBottom:'1rem' }}>
          <Typography variant="h6" sx={{ fontSize:'var(--fs-lg)', marginRight:'1rem' }} color='primary'>Trang Chủ</Typography>
          <Typography variant='h6' sx={{ fontSize:'var(--fs-lg)', display:'flex', alignItems:'center' }}>
            <ArrowForwardOutlined fontSize='small' sx={{ width:'1.1rem', height:'1.1rem', marginRight:'1rem' }}/>
              Thống Kê Bán Hàng
          </Typography>
        </Stack>
        <Typography variant='h1' fontSize='var(--fs-lg)' fontWeight={600}>Thống Kê Chung</Typography>
      </Box>
      {/* CONTAINER */}
      {/* HEADER */}
      <Box sx={{ padding:'1rem', backgroundColor:'var(--text-white)', borderRadius:'0.5rem',
        display:'flex', justifyContent:'space-between', alignItems:'center', direction:'row' }}>
        <Stack sx={{ width:'17rem' }} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Button variant="contained" size="small">
            <Add fontSize="small"/>
            Thêm Mới
          </Button>

          <Select
            value={age}
            onChange={handleChange}
            sx={{ minWidth:'9rem', '& .MuiSelect-select':{ padding:'6px' } }} 
            displayEmpty
          >
            <MenuItem value="">
            Sắp xếp theo  
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Stack>

        <Stack direction={'row'} sx={{ minWidth:'20rem' }} justifyContent={'space-between'} alignItems={'center'}>
          <TextField variant='standard' label="Tìm kiếm" sx={{ flex:1, marginRight:'1rem' }}/>
          <Button variant='contained' size='small'>Tìm kiếm</Button>
        </Stack>
      </Box>
      {/* CONTENT */}
      <Box sx={{ backgroundColor:'var(--text-white)', borderRadius:'0.5rem', marginTop:'1rem' }}>
        <ProductList />
      </Box>
    </Box>
  )
}
function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
]
const ProductList = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sản Phẩm</TableCell>
            <TableCell align="right">Hình Ảnh</TableCell>
            <TableCell align="right">Giá Niêm Yết</TableCell>
            <TableCell align="right">Trạng Thái</TableCell>
            <TableCell align="right">Hành Động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Store