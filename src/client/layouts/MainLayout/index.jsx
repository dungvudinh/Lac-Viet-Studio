import { Container } from '@mui/material'
import Navbar from '../Components/Navbar'

function MainLayout({ children }) {
  return ( 
    <Container maxWidth='true' sx={{ padding:'0 !important' }}>
      <Navbar belongTo={'home'}/>
      {children}
    </Container>
  )
}

export default MainLayout