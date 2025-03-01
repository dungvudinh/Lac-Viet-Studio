import { Container } from '@mui/material'
import Navbar from '../Components/Navbar'

function StoreLayout({ children }) {
  return ( 
    <Container maxWidth='true'>
      <Navbar belongTo={'store'}/>
      {children}
    </Container>
  )
}

export default StoreLayout