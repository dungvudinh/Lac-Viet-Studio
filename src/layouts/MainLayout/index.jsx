import { Container } from '@mui/material'
import Navbar from '../Components/Navbar'
import { HomeFooter } from '../Components/Footer'

function MainLayout({ children, routePath }) {
  let belongTo = 'home'
  if (routePath !== '/')
  {
    belongTo = routePath.split('/')[1]
  }
  return ( 
    <Container maxWidth='true' sx={{ padding:'0 !important', backgroundColor:belongTo === 'profile-setting' ? '#F7F7F7' : 'FFF' }}>
      <Navbar belongTo={belongTo}/>
      {children}
      {belongTo !== 'profile-setting' && <HomeFooter />}
    </Container>
  )
}

export default MainLayout