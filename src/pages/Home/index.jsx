import { useState } from 'react'
import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Grid2 as Grid, Link, Box, Stack, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material'
import { KeyboardArrowRight, ArrowForward, ExpandMore } from '@mui/icons-material'
import PageBanner from '~/components/PageBanner'
import LazyLoadImage from '~/components/LazyLoadImage'
import LazyLoadBackgroundImage from '~/components/LazyLoadBackgroundImage'
import news1 from '~/assets/Images/News/news1.jpeg'
import news2 from '~/assets/Images/News/news2.jpeg'
import { homeBanner } from '~/assets/Images/Banner'
import outstandingProject1 from '~/assets/Images/outstandingProject1.jpg'
import outstandingProject2 from '~/assets/Images/outstandingProject2.jpg'
import outstandingProject3 from '~/assets/Images/outstandingProject3.jpg'
import storeItem1 from '~/assets/Images/storeItem1.jpg'
import storeItem2 from '~/assets/Images/preview.jpg'

const cx = classNames.bind(styles)
const STORE_ITEMS =[
  {
    id:1, 
    title:'Nhựa in 3D', 
    desc: 'Lucky Box – Móc khóa bất ngờ, quà tặng may mắn!',
    image: storeItem1,  
    buyPath:'/', 
    comparePath:'/'
  }, 
  {
    id:2, 
    title:'Phụ kiện in 3D', 
    desc: 'Tô điểm không gian của bạn, thêm phong cách', 
    image: storeItem2,
    buyPath:'/', 
    comparePath:'/'
  } 
]

const SERVICE_ITEMS = [
  {
    id:1, 
    title:'Dịch vụ thiết kế 3D', 
    desc:'Mô hình 3D có độ chính xác cao, phù hợp với mọi nhu cầu.', 
    image:'src/assets/Images/3dDesigningServiceBanner.jpg', 
    path:''
  }, 
  {
    id:2, 
    title:'Dịch vụ in 3D', 
    desc:'Bản in 3D sắc nét, chi tiết với chất lượng vượt trội.', 
    image:'src/assets/Images/3dPrintingServiceBanner.jpg', 
    path:''
  }
]

const NEWS_ITEMS = [
  {
    id: 1,
    title: 'Exclusive Model Program: Cash Rewards and Copyright Support',
    desc: 'When we communicated with creators on MakerWorld about the features they want, two of the most frequent requests are Cash Incentives and Copyright Support.',
    image: news1,
    link: '/'
  },
  {
    id: 2,
    title: 'New 3D Printing Technologies Released',
    desc: 'Discover our latest advancements in 3D printing technology that revolutionize the industry.',
    image: news2,
    link: '/'
  },
  {
    id: 3,
    title: 'Customer Success Stories',
    desc: 'See how our clients are transforming their businesses with our 3D printing solutions.',
    image: news1,
    link: '/'
  },
  {
    id: 4,
    title: 'Upcoming 3D Printing Workshops',
    desc: 'Join our expert-led workshops to master the art of 3D printing.',
    image: news2,
    link: '/'
  }
]

const BANNER = {
  // buttons:[
  //   { title:'Buy now', type:'primary' }, 
  //   { title:'Learn more', type:'secondary' }
  // ],
  items:[
    { bgUrl:homeBanner, title: 'Lạc Việt Studio', desc:'Hiện thực hoá mọi ý tưởng' }
  ]
}
// const BANNER_ITEMS = [
//   { id:1, img:homeBanner1 },
//   { id:2, img:homeBanner2 },
//   { id:3, img:homeBanner3 },
//   { id:4, img:homeBanner4 },
//   // { id:5, img:homeBanner5 } 
// ]

const OUTSTANDING_PROJECTS =[
  {
    title: 'Bể thuỷ sinh', 
    image: outstandingProject1, 
    path:'/'
  }, 
  {
    title: 'Mô hình thẩm mĩ viện', 
    image: outstandingProject2, 
    path:'/'
  }, 
  {
    title: 'Mô hình sa bàn Viettel Post', 
    image: outstandingProject3, 
    path:'/'
  }
]
const PARTNER_ITEMS = [
  {
    id:1,
    image:'~/assets/Images/partnerItem1.png'
  }
]

function Home() {
  
  return ( 
    <Box className={cx('home-container')}>
      {/* HOME BANNER */}
      <PageBanner banner={BANNER} belongTo={'home'}/>
      {/* HOME MAIN CONTENT */}
      <Box sx={{ paddingBottom:'4rem', marginTop:{ md:'7rem', xs:'4rem' }, textAlign:'center' }}>
        <Container maxWidth='xl'>
          <Typography varient='h1' fontWeight={700} fontSize={{ xs:'var(--title-fs-sm)', md:'var(--title-fs-md)' }}>
              Cửa hàng 3D
          </Typography>
          <Typography varient='h6' fontSize={{ xs:'var(--desc-fs-sm)', md:'var(--desc-fs-md)' }} >
              Khám phá về những sản phẩm tuyệt vời của chúng tôi
          </Typography>
          <Stack gap={2} direction={{ md:'row', xs:'column' }} mt={'2rem'}>
            {
              STORE_ITEMS.map(storeItem => (
                <LazyLoadBackgroundImage
                  key={storeItem.id}
                  src={'https://cdn1.bambulab.com/home/quickLink/PC/3D-Printer.jpg'}
                  alt={storeItem.title}
                  className={cx('store-item_bg')}
                >
                  <div className={cx('store-item_text')}>
                    <Typography variant="h1" fontWeight={600} fontSize={{ md: 'var(--title-fs-xm)', xs: 'var(--title-fs-xs)' }}>
                      {storeItem.title}
                    </Typography>
                    <Typography variant="h6" fontSize={{ md: 'var(--desc-fs-md)', xs: 'var(--desc-fs-xs)' }} padding="10px 0">
                      {storeItem.desc}
                    </Typography>
                    <Link color="primary" underline="hover" href={storeItem.buyPath}
                      sx={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                      <p>Tìm hiểu thêm</p>
                      <KeyboardArrowRight sx={{ marginTop: '2px' }} />
                    </Link>
                  </div>
                </LazyLoadBackgroundImage>
              ))
            }
          </Stack>
        </Container>
        {/* 3D SERVICE */}
        <Container sx={{ marginTop:{ md:'7rem', xs:'4rem' }, textAlign:'center' }} maxWidth='xl'>
          <Typography varient='h1' fontWeight={700} fontSize={{ xs:'var(--title-fs-sm)', md:'var(--title-fs-md)' }}>
              Dịch vụ 3D
          </Typography>
          <Typography varient='h6' fontSize={{ md:'var(--desc-fs-md)', xs:'var(--desc-fs-xs)' }} >
              cá nhân hoá sản phẩm theo nhu cầu của khách hàng
          </Typography>
          <Grid container sx={{ display:'flex', flexDirection:{ md:'row', xs:'column' } }} mt={'2rem'} spacing={2}>
            {SERVICE_ITEMS.map(serviceItem => (
              <Grid size={{ md:6, xs:12 }} position="relative" sx={{ cursor:'pointer' }} key={serviceItem.id}>
                {/* <div className={cx('image-slider')}>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ dynamicBullets: true }}
                                            
                  >
                    <SwiperSlide>
                      <
                    </SwiperSlide>
                  </Swiper>
                </div> */}
                {/* <picture> */}
                <LazyLoadImage src={serviceItem.image} alt={serviceItem.title} className={cx('service-item_bg')}/>
                {/* <img src={'https://cdn1.bambulab.com/home/inspirations/pc/5.jpg'} className={cx('service-item_bg')}/> */}
                {/* </picture> */}
                <div className={cx('service-item_text')}>
                  <Stack direction="row" justifyContent="space-between">
                    <Box>
                      <Typography varient='h1' fontWeight={600} fontSize={{ md:'var(--title-fs-xm)', xs:'var(--title-fs-xs)' }}
                        textAlign={'left'}>
                        {serviceItem.title}
                      </Typography>
                      <Typography varient='h6' fontSize={{ md:'var(--desc-fs-md)', xs:'var(--desc-fs-xs)' }}
                        textAlign={'left'}>
                        {serviceItem.desc}
                      </Typography>
                    </Box>
                    <button className={cx('action')}>
                      <ArrowForward fontSize="medium" sx={{ color:'#fff' }}/>
                    </button>
                  </Stack>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* SA BAN */}
        <Container sx={{ marginTop:{ md:'7rem', xs:'4rem' }, textAlign:'center' }} maxWidth='xl'>
          <Typography variant="h1" fontWeight="bold" textAlign="center" fontSize={{ md:'var(--title-fs-md)', xs:'var(--title-fs-sm)' }}marginBottom="0.5rem">
              Dự Án Nổi Bật
          </Typography>
          <Typography variant="body1" textAlign="center" fontSize={{ md:'var(--desc-fs-md)', xs:'var(--desc-fs-xs)' }}>
                Thiết kế mô hình sa bàn chi tiết, tái hiện chính xác các dự án xây dựng.
          </Typography>
          <Stack gap={{ xs:1, md:4 }} mt={'2rem'} direction={{ xs: 'column', md: 'row' }} >
            {
              OUTSTANDING_PROJECTS.map((project, index) => (
                <LazyLoadBackgroundImage key={index}
                  src={project.image}
                  className={cx('architecture-model_item')}>
                  <div className={cx('architecture-model_item__text')}>
                    <Typography variant="h1" fontWeight="bold" textAlign="center" fontSize={{ md:'var(--title-fs-xm)', xs:'var(--title-fs-xs)' }}>
                    
                      {project.title}
                    </Typography>
                    <Link to={project.path} underline="hover" fontSize={{ md:'var(--fs-lg)', xs:'var(--desc-fs-xs)' }} sx={{ cursor:'pointer' }}>
                      {/* Learn more */}
                          Tìm hiểu thêm
                      <KeyboardArrowRight/>
                    </Link>
                  </div>
                </LazyLoadBackgroundImage>
                // <div key={index} className={cx('architecture-model_item')} style={{ backgroundImage:'url(https://cdn1.bambulab.com/home/freshStart/pc/1.jpg)' }}>
                 
                // </div>
              ))
            }
          </Stack>
        </Container>
        <Box className={cx('slogan_bg')} marginTop={{ md:'7rem', xs:'4rem' }} sx={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
          <Typography varient='h6' className='color-gradient' fontSize={{ md:'var(--title-fs-md)', xs:'var(--title-fs-sm)' }} 
          fontWeight={700} position={'relative'} zIndex={'10'} maxWidth={{ md:'60rem' }}>
              Biến Ý Tưởng Của Khách Hàng Thành Hiện Thực
          </Typography>
        </Box>
        {/* NEWS */}
        {/* <News/> */}
        {/* <Container sx={{ marginTop:{ md:'7rem', xs:'4rem' }, textAlign:'center' }} maxWidth='lg'>
          <Typography variant="h1" fontSize={{ md:'var(--title-fs-md)', xs:'var(--title-fs-sm)' }} fontWeight={700}>
                Đối tác của chúng tôi
          </Typography>
          <Stack mt={'2rem'}>
            {
              PARTNER_ITEMS.map(partnerItem => (
                <img src={partnerItem.image} key={partnerItem.id} style={{ width:'11rem' }}/>
              ))
            }
           
          </Stack>
        </Container> */}
      </Box>
    </Box>
  )
}
const News = () => {
  const [activeNews, setActiveNews] = useState(0)
  const handleAccordionChange = (index) => (event, isExpanded) => {
    setActiveNews(index)
  }
  return (
    <Container className={cx('news-container')} sx={{ marginTop:{ md:'7rem', xs:'4rem' }, textAlign:'center' }} maxWidth='lg'>
      <Typography variant="h1" fontSize={{ md:'var(--title-fs-md)', xs:'var(--title-fs-xs)' }} fontWeight={700}>
              Tin Tức
      </Typography>
      <Grid container mt={'2rem'}>
        <Grid size={{ xs:12, md:6 }} overflow="hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ dynamicBullets: true }}
            initialSlide={activeNews}
            onSlideChange={({ activeIndex }) => setActiveNews(activeIndex)}
                      
          >
            {NEWS_ITEMS.map((item, index) => (
              <SwiperSlide key={index}>
                <Box>
                  <picture>
                    {/* <img src={item.image} className={cx('news-img_content')}/> */}
                    <LazyLoadImage src={'https://cdn1.bambulab.com/home/quickLink/PC/3D-Printer.jpg'} className={cx('news-img_content')}/>
                  </picture>
                  <Box sx={{ padding: '1rem', textAlign: 'left' }} display={{ xs:'block', md:'none' }}>
                    <Typography variant="h5" fontWeight={700} fontSize='2rem' mb={1}>
                      {item.title}
                    </Typography>
                    <Typography sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      lineHeight: '1.5',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {item.desc}
                    </Typography>
                    <Link color="primary" underline="hover" 
                      sx={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }} 
                      href={item.link}
                    >
                        Learn more
                      <KeyboardArrowRight />
                    </Link>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        <Grid size={6} display={{ xs:'none', md:'block' }}>
          <Box sx={{ height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'2rem 3rem' }}>
            {NEWS_ITEMS.map((item, index) => (
              <Accordion 
                key={item.id}
                expanded={activeNews === index}
                onChange={handleAccordionChange(index)}
                square={true} 
                disableGutters={true}
              >
                <AccordionSummary expandIcon={<ExpandMore fontSize="large"/>}>
                  <Typography variant="h5" textAlign="left" fontWeight={700} fontSize='1.5rem' 
                    sx={{ paddingRight:'2rem' }} className={cx('news-item_title')}> 
                    {item.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ textAlign:'left', paddingRight:'1.5rem' }}>
                  <Typography sx={{
                    overflow:'hidden', 
                    textOverflow:'ellipsis', 
                    lineHeight:'1.5', 
                    maxHeight:'45px', 
                    display:'-webkit-box', 
                    WebkitLineClamp:2, 
                    WebkitBoxOrient:'vertical',
                    fontSize:'0.9rem'
                  }}>
                    {item.desc}
                  </Typography>
                  <Link color="primary" underline="hover" className="mt-2" href={item.link} sx={{ fontSize:'0.9rem' }}>
                      Learn more
                    <KeyboardArrowRight />
                  </Link>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
export default Home