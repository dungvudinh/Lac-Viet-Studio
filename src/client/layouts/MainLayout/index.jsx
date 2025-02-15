import { Container } from '@mui/material'
import Navbar from '../Components/Navbar'
import { HomeFooter } from '../Components/Footer'

function MainLayout({ children }) {
  return ( 
    <Container maxWidth='true' sx={{ padding:'0 !important' }}>
      <Navbar belongTo={'home'}/>
      {children}
      <HomeFooter />
    </Container>
  )
}

export default MainLayout