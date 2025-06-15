import classNames from 'classnames/bind'
import styles from './OutstandingProduct.module.scss'
import { Box, Typography, Container, Stack, Grid2 as Grid} from '@mui/material'
import PageBanner from '~/components/PageBanner'
import { homeBanner1 } from '~/assets/Images/Banner'
import { Zap, Users, Box as BoxIcon } from 'lucide-react'
const cx = classNames.bind(styles)
const BANNER = {
  buttons:[
    { title:'Buy now', type:'primary' }, 
    { title:'Learn more', type:'secondary' }
  ],
  items:[
    { bgUrl:homeBanner1, title: 'TEST 1', desc:'Lorem ipsum dolor sit amet' } 
    // {bgUrl:homeBanner2, title:'TEST 2', desc:'Lorem ipsum dolor sit amet'}, 
    // {bgUrl:homeBanner3, title:'TEST 3', desc:'Lorem ipsum dolor sit amet'}, 
    // {bgUrl:homeBanner4, title:'TEST 4', desc:'Lorem ipsum dolor sit amet'}, 
    // {bgUrl:homeBanner5, title:'TEST 5',desc: 'Lorem ipsum dolor sit amet'}
  ]
}
const OUTSTANDING_NUMBERS = [
  { icon:Zap, label: 'Projects Completed', value: '500+' },
  { icon: Users, label: 'Happy Clients', value: '200+' },
  { icon:BoxIcon, label: 'Categories', value: '15+' }
]
function OutstandingProduct()
{
  return (
    <Box className={cx('outstanding-product_container')}>
      {/* HOME BANNER */}
      <PageBanner banner={BANNER} belongTo={'home'}/>
      {/* HOME MAIN CONTENT */}
      <Box>
        <Container maxWidth='xl'>
          {/* ABOUT */}
          <Box className='d-flex justify-center flex-column items-center text-center mt-2'>
            <Typography variant='h1' fontWeight={700} className='d-flex justify-center items-center'
              fontSize={{ xs:'var(--title-fs-sm)', md:'var(--title-fs-md)' }} textAlign={'center'}>
                Crafting the 
              <Typography variant='body1' className='ml-2 color-gradient'
                sx={{ fontWeight:700, fontSize:{ xs:'var(--title-fs-sm)', md:'var(--title-fs-md)' } }}>
                    Future
              </Typography>
            </Typography>
            <Typography varient='h6' className='mt-2' fontSize={{ xs:'var(--desc-fs-sm)', md:'var(--desc-fs-md)' }} sx={{ maxWidth:'50rem' }}>
                At Lạc Việt, we transform imagination into reality through cutting-edge 3D technology. Our team of expert designers and engineers push the boundaries of what's possible, delivering innovative solutions that revolutionize industries.
            </Typography>
            {/* OUTSTANDING NUMBERS */}
            <Container maxWidth='lg'>
              <Stack direction={'row'} justifyContent={'space-around'} sx={{ width:'100%', marginTop:'4rem' }}>
                {OUTSTANDING_NUMBERS.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <Box key={index} className='d-flex justify-center flex-column items-center hover-scale-101'>
                      <Box className='p-2 d-flex justify-center items-center mb-3' sx={{ backgroundColor:'var(--primary-color-bg-2)', width:'4rem', height:'4rem', borderRadius:'1rem' }}>
                        <Icon className='primary-color'/>
                      </Box>
                      <Typography variant='h1' sx={{ fontSize:{ md:'var(--title-fs-md)' }, fontWeight:'700', marginBottom:'1rem' }}>{item.value}</Typography>
                      <Typography variant='p'>{item.label}</Typography>
                    </Box>)
                })}
              </Stack>
            </Container>
            {/* INNOVATION */}
           <Grid container spacing={2} sx={{width:'100%', marginTop:'4rem'}}>
            <Grid size={6}>
                <Typography variant='h3' sx={{fontSize:{md:'var(--title-fs-xmd)'}, fontWeight:700}}>
                    Innovation Through Technology
                </Typography>
            </Grid>
            <Grid size={6}>

            </Grid>
           </Grid>
          </Box>
                    
        </Container>
      </Box>
    </Box>
  )
}
export default OutstandingProduct