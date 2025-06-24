import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './OutstandingProduct.module.scss'
import { Box, Typography, Container, Stack, Grid2 as Grid, Chip} from '@mui/material'
import PageBanner from '~/components/PageBanner'
import { homeBanner1 } from '~/assets/Images/Banner'
import { Zap, Users, Box as BoxIcon, Funnel } from 'lucide-react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
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
const CATEGORIES = [
  {id:1,label:'All'}, 
  {id:2, label:'Architecture'}, 
  {id:3, label:'3D Printing'}, 
  {id:4, label:'Simulation'}, 
  {id:5, label:'Gaming'}, 
  {id:6, label:'Medical'}, 
  {id:7, label:'Automotive'}, 
  {id:8, label:'Industrial'},
]
function OutstandingProduct()
{
  const [currentCategoryId, setCurrentCategoryId] = useState(0);
  const handleFilterCategory = (id)=>
  {
    setCurrentCategoryId(id)
  }
  return (
    <Box className={cx('outstanding-product_container')}>
      {/* HOME BANNER */}
      <PageBanner banner={BANNER} belongTo={'home'}/>
      {/* HOME MAIN CONTENT */}
      <Box>
        <Container maxWidth='xl'>
          {/* ABOUT */}
          <Box className='d-flex justify-center flex-column items-center text-center mt-5'>
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
           <Grid container spacing={4} sx={{width:'100%', marginTop:'4rem'}} maxWidth={'lg'}>
            <Grid size={6}>
                <Typography variant='h3' sx={{fontSize:{md:'var(--title-fs-sm)'}, fontWeight:700, textAlign:'left'}}>
                    Innovation Through Technology
                </Typography>
                <Typography variant='subtitle1' sx={{textAlign:'left', marginTop:'1rem', fontSize:{md:'var(--fs-lg)'}, fontWeight:500}}>
                    We specialize in creating stunning architectural visualizations, precision 3D-printed prototypes, 
                and complex technical simulations that help our clients visualize, test, and perfect their ideas 
                before bringing them to life.
                </Typography>
                <Typography variant='subtitle1' sx={{textAlign:'left', marginTop:'1rem', fontSize:{md:'var(--fs-lg)'}, fontWeight:500}}>
                Our state-of-the-art technology combined with creative expertise ensures that every project 
                we undertake exceeds expectations and sets new standards in the industry.
                </Typography>
            </Grid>
            <Grid size={6}>
                <Box sx={{border:'1px solid rgb(255,255,255,0.1)', height:'100%', borderRadius:'1rem', backgroundColor:'var(--primary-color-bg-2)', 
                    padding:'2rem'
                }}>
                    <Typography variant='h2' sx={{fontWeight:700, fontSize:{md:'var(--title-fs-md)'}, color:'var(--primary-color)'}}>
                        3+ 
                    </Typography>
                    <Typography variant='subtitle1' sx={{fontWeight:600, fontSize:{md:'var(--desc-fs-xs)'}}}>
                        Years of Exeperience
                    </Typography>
                    <Typography variant='body1' 
                    sx={{width:'100%', height:'2px', background:'linear-gradient(to right, transparent, #ff9f43, transparent)', marginTop:'1rem'}}>
                    </Typography>
                    <Typography variant='subtitle2' sx={{marginTop:'1rem', fontSize:{md:'var(--fs-lg)'},fontWeight:500}}>
                    Trusted by leading companies worldwide for innovative 3D solutions and exceptional quality.
                    </Typography>
                </Box>
            </Grid>
           </Grid>
          </Box> 
           {/* FEATURED PROJECTS */}
           <Box className='d-flex flex-column items-center' sx={{marginTop:'10rem'}}>
           <Typography variant='h1' fontWeight={700} className='d-flex justify-center items-center'
              fontSize={{ xs:'var(--title-fs-sm)', md:'var(--title-fs-md)' }} textAlign={'center'}>
                Featured
              <Typography variant='body1' className='ml-2 color-gradient'
                sx={{ fontWeight:700, fontSize:{ xs:'var(--title-fs-sm)', md:'var(--title-fs-md)' } }}>
                    Projects
              </Typography>
            </Typography>
            <Typography varient='h6' className='mt-2' fontSize={{ xs:'var(--desc-fs-sm)', md:'var(--desc-fs-md)' }} sx={{ maxWidth:'50rem' }}>
            Explore our diverse portfolio of groundbreaking 3D projects that showcase innovation, 
            precision, and technical excellence across multiple industries.
            </Typography>
           </Box>
           {/* FILTER */}
            <Box className='mt-5 d-flex flex-row' >
              <Typography variant='body1'  className='d-flex flex-row items-center' sx={{fontWeight:600, marginRight:'1rem',minWidth:'100px'}}>
                <Funnel className='mr-2'/>
                Filter by:
              </Typography>
              <Box className='flex-1' sx={{width:'calc(100% - 100px)'}}>
              <Swiper className='mySwiper' 
              smodules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={12}
              >
                {CATEGORIES.map((category)=>(
                  <SwiperSlide className='w-auto'>
                    <Chip key={category.id} variant='outlined' label={category.label} className={cx({active: currentCategoryId === category.id})}
                    sx={{color:'var(--text-white)', fontWeight:700, marginLeft:'1rem', fontSize:{md:'var(--fs-lg)'}, flexShrink:0, transition:'all 0.5s ease-in-out'}} onClick={()=>handleFilterCategory(category.id)}/>
                  </SwiperSlide>
                ))}
              </Swiper>
              </Box>
            </Box>
            {/* GRID */}
            <Grid container spacing={2} mt={4}>
              <Grid size={3} sx={{backgroundColor:'#FFF', height:'30rem', borderRadius:'1rem'}}>
                GRID 1
              </Grid>
              
            </Grid>
        </Container>
      </Box>
    </Box>
  )
}
export default OutstandingProduct