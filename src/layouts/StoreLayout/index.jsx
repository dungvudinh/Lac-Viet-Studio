import { Container } from '@mui/material'
import Navbar from '~/layouts/Components/Navbar'
import { StoreFooter } from '~/layouts/Components/Footer'

function StoreLayout({ children }) {
  return ( 
    <Container maxWidth='true' sx={{ padding:'0 !important' }}>
      <Navbar belongTo={'store'}/>
      {children}
      <StoreFooter />
    </Container>
  )
}

export default StoreLayout