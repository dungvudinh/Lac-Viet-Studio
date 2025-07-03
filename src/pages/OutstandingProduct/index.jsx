import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './OutstandingProduct.module.scss'
import { Box, Typography, Container, Stack, Grid2 as Grid, Chip, IconButton, Button } from '@mui/material'
import PageBanner from '~/components/PageBanner'
import { homeBanner1 } from '~/assets/Images/Banner'
import { Zap, Users, Box as BoxIcon, Funnel, Eye } from 'lucide-react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import serviceItem2 from '~/assets/Images/serviceItem2.jpg'
import EmblaCarousel from '~/components/EmblaCarousel'
import BackdropCustom from '~/components/Backdrop'
import { useDispatch } from 'react-redux'
import { setBackdrop } from '~/redux/features/slices/backdropSlice'
const cx = classNames.bind(styles)
const BANNER = {
  buttons:[
    { title:'Buy now', type:'primary' }, 
    { title:'Learn more', type:'secondary' }
  ],
  items:[
    { bgUrl:homeBanner1, title: 'TEST 1', desc:'Lorem ipsum dolor sit amet' } 
  ]
}
const OUTSTANDING_NUMBERS = [
  { icon:Zap, label: 'Projects Completed', value: '500+' },
  { icon: Users, label: 'Happy Clients', value: '200+' },
  { icon:BoxIcon, label: 'Categories', value: '15+' }
]
const CATEGORIES = [
  { id:1, label:'All' }, 
  { id:2, label:'Architecture' }, 
  { id:3, label:'3D Printing' }, 
  { id:4, label:'Simulation' }, 
  { id:5, label:'Gaming' }, 
  { id:6, label:'Medical' }, 
  { id:7, label:'Automotive' }, 
  { id:8, label:'Industrial' }
]
const OPTIONS ={ loop:true, startIndex:0 }
const SLIDE_PER_VIEW = 3
const SLIDES = [
  { name:'test 1' },
  { name:'test 2' },
  { name:'test 3' },
  { name:'test 4' },
  { name:'test 5' },
  { name:'test 6' },
  { name:'test 7' }
]
const GRID_ITEMS = [
  {
    image:serviceItem2,
    summary:'ARCHITECTURE',
    title:'Modern Skyscraper Model',
    desc:'Detailed architectural visualization of a 40-story commercial building with intricate facade details.'
  },
  {
    image:serviceItem2,
    summary:'ARCHITECTURE',
    title:'Modern Skyscraper Model',
    desc:'Detailed architectural visualization of a 40-story commercial building with intricate facade details.'
  },
  {
    image:serviceItem2,
    summary:'ARCHITECTURE',
    title:'Modern Skyscraper Model',
    desc:'Detailed architectural visualization of a 40-story commercial building with intricate facade details.'
  },
  {
    image:serviceItem2,
    summary:'ARCHITECTURE',
    title:'Modern Skyscraper Model',
    desc:'Detailed architectural visualization of a 40-story commercial building with intricate facade details.'
  },
  {
    image:serviceItem2,
    summary:'ARCHITECTURE',
    title:'Modern Skyscraper Model',
    desc:'Detailed architectural visualization of a 40-story commercial building with intricate facade details.'
  },
  {
    image:serviceItem2,
    summary:'ARCHITECTURE',
    title:'Modern Skyscraper Model',
    desc:'Detailed architectural visualization of a 40-story commercial building with intricate facade details.'
  },
  {
    image:serviceItem2,
    summary:'ARCHITECTURE',
    title:'Modern Skyscraper Model',
    desc:'Detailed architectural visualization of a 40-story commercial building with intricate facade details.'
  },
  {
    image:serviceItem2,
    summary:'ARCHITECTURE',
    title:'Modern Skyscraper Model',
    desc:'Detailed architectural visualization of a 40-story commercial building with intricate facade details.'
  },
  {
    image:serviceItem2,
    summary:'ARCHITECTURE',
    title:'Modern Skyscraper Model',
    desc:'Detailed architectural visualization of a 40-story commercial building with intricate facade details.'
  },
  {
    image:serviceItem2,
    summary:'ARCHITECTURE',
    title:'Modern Skyscraper Model',
    desc:'Detailed architectural visualization of a 40-story commercial building with intricate facade details.'
  },
]
function OutstandingProduct()
{
  const dispatch = useDispatch()
  const [currentCategoryId, setCurrentCategoryId] = useState(0)
  const handleFilterCategory = (id) =>
  {
    setCurrentCategoryId(id)
  }
  const handleOpenImageSlider = () =>
  {
    dispatch(setBackdrop(true))
  }
  return (
    <Box className={cx('outstanding-product_container')}>
      {/* HOME BANNER */}
      <PageBanner banner={BANNER} belongTo={'home'}/>
      {/* HOME MAIN CONTENT */}
      <Box textAlign={'center'}>
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
            <Grid container spacing={4} sx={{ width:'100%', marginTop:'4rem' }} maxWidth={'lg'}>
              <Grid size={6}>
                <Typography variant='h3' sx={{ fontSize:{ md:'var(--title-fs-sm)' }, fontWeight:700, textAlign:'left' }}>
                    Innovation Through Technology
                </Typography>
                <Typography variant='subtitle1' sx={{ textAlign:'left', marginTop:'1rem', fontSize:{ md:'var(--fs-lg)' }, fontWeight:500 }}>
                    We specialize in creating stunning architectural visualizations, precision 3D-printed prototypes, 
                and complex technical simulations that help our clients visualize, test, and perfect their ideas 
                before bringing them to life.
                </Typography>
                <Typography variant='subtitle1' sx={{ textAlign:'left', marginTop:'1rem', fontSize:{ md:'var(--fs-lg)' }, fontWeight:500 }}>
                Our state-of-the-art technology combined with creative expertise ensures that every project 
                we undertake exceeds expectations and sets new standards in the industry.
                </Typography>
              </Grid>
              <Grid size={6}>
                <Box sx={{ border:'1px solid rgb(255,255,255,0.1)', height:'100%', borderRadius:'1rem', backgroundColor:'var(--primary-color-bg-2)', 
                  padding:'2rem'
                }}>
                  <Typography variant='h2' sx={{ fontWeight:700, fontSize:{ md:'var(--title-fs-md)' }, color:'var(--primary-color)' }}>
                        3+ 
                  </Typography>
                  <Typography variant='subtitle1' sx={{ fontWeight:600, fontSize:{ md:'var(--desc-fs-xs)' } }}>
                        Years of Exeperience
                  </Typography>
                  <Typography variant='body1' 
                    sx={{ width:'100%', height:'2px', background:'linear-gradient(to right, transparent, #ff9f43, transparent)', marginTop:'1rem' }}>
                  </Typography>
                  <Typography variant='subtitle2' sx={{ marginTop:'1rem', fontSize:{ md:'var(--fs-lg)' }, fontWeight:500 }}>
                    Trusted by leading companies worldwide for innovative 3D solutions and exceptional quality.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box> 
          {/* FEATURED PROJECTS */}
          <Box className='d-flex flex-column items-center' sx={{ marginTop:'10rem' }}>
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
            <Typography variant='body1' className='d-flex flex-row items-center' sx={{ fontWeight:600, marginRight:'1rem', minWidth:'100px' }}>
              <Funnel className='mr-2'/>
                Filter by:
            </Typography>
            <Box className='flex-1' sx={{ width:'calc(100% - 100px)' }}>
              <Swiper className='mySwiper' 
                smodules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={12}
              >
                {CATEGORIES.map((category) => (
                  <SwiperSlide className='w-auto' key={category.id}>
                    <Chip variant='outlined' label={category.label} className={cx({ active: currentCategoryId === category.id })}
                      sx={{ color:'var(--text-white)', fontWeight:700, marginLeft:'1rem', fontSize:{ md:'var(--fs-lg)' }, flexShrink:0, transition:'all 0.5s ease-in-out' }} onClick={() => handleFilterCategory(category.id)}/>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>
          {/* GRID */}
          <Grid container spacing={2} mt={4}>
            {GRID_ITEMS.map((item, index) => (
              <Grid size={3} className={cx('grid-item')} key={index}
                sx={{ backgroundColor:'rgba(17,24,39,0.5)', height:'26rem', borderRadius:'1rem', overflow:'hidden', border:'1px solid rgba(255,255,255,0.1)', cursor:'pointer' }}>
                <Box sx={{ height:'60%', width:'100%', overflow:'hidden', position:'relative' }}>
                  <img src={serviceItem2} className='w-100 h-100'/>
                  <Box className={cx('see-detail')} sx={{ transform:'translateX(-50%)' }}>
                    <IconButton onClick={handleOpenImageSlider}
                      sx={{ backgroundColor:'var(--primary-color)', padding:'0.5rem', '&:hover':{ backgroundColor:'var(--primary-color-hover)' } }}>
                      <Eye color='var(--text-white)'/>
                    </IconButton>
                  </Box>
                </Box>
                <Box sx={{ height:'40%', color:'var(--text-white)', padding:'1rem' }} className='d-flex flex-column justify-around'>
                  <Typography variant='h6' sx={{ fontSize:{ md:'var(--fs-lg)' }, fontWeight:700, color:'var(--primary-color)' }}>
                    ARCHITECTURE
                  </Typography>
                  <Typography variant='h5' sx={{ fontSize:{ md: 'var(--desc-fs-md)' }, fontWeight:700 }}>
                  Modern Skyscraper Model
                  </Typography>
                  <Typography variant='body1' sx={{ fontSize:{ md:'var(--fs-md)' }, fontWeight:600, color:'rgba(156,163,175, 1)' }} >
                  Detailed architectural visualization of a 40-story commercial building with intricate facade details.
                  </Typography>
                </Box>
              </Grid>    
            ))}
          </Grid>
          {/* VIEW ALL BUTTON */}
          <Button variant="contained" className='hover-scale-101'
            sx={{ marginTop:'5rem', fontWeight:700, fontSize:{ md:'var(--fs-lg)', background:'linear-gradient(to right,#f97316, #dc2626)' }, transition:'all 0.2s ease-in-out' }}>
            View All Products
          </Button>
        </Container>
      </Box>
      <BackdropCustom>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} slidesPerView={SLIDE_PER_VIEW}/>
      </BackdropCustom>
      {/* </Backdrop> */}
    </Box>
  )
}
export default OutstandingProduct