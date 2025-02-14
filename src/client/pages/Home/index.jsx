import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Grid2 as Grid, Link, Box, Stack, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material'
import { KeyboardArrowRight, ArrowForward } from '@mui/icons-material'
import PageBanner from '~/client/components/PageBanner'
import news1 from '~/client/assets/Images/News/news1.jpeg'
import news2 from '~/client/assets/Images/News/news2.jpeg'
import { homeBanner1, homeBanner2, homeBanner3, homeBanner4, homeBanner5 } from '~/client/assets/Images/Banner'
import saban1 from '~/client/assets/Images/saban1.jpg'
import saban2 from '~/client/assets/Images/saban2.jpg'
import saban3 from '~/client/assets/Images/saban3.jpg'
import storeItem1 from '~/client/assets/Images/storeItem1.jpg'
import storeItem2 from '~/client/assets/Images/preview.jpg'
import serviceItem1 from '~/client/assets/Images/serviceItem1.jpg'
import serviceItem2 from '~/client/assets/Images/serviceItem2.jpg'
import partnerItem1 from '~/client/assets/Images/partnerItem1.png'

const cx = classNames.bind(styles)
const STORE_ITEMS =[
  {
    id:1, 
    title:'Lucky Box', 
    desc: 'Lucky Box – Móc khóa bất ngờ, quà tặng may mắn!',
    image: storeItem1,  
    buyPath:'/', 
    comparePath:'/'
  }, 
  {
    id:2, 
    title:'Đồ Decor', 
    desc: 'Tô điểm không gian của bạn, thêm phong cách', 
    image: storeItem2,
    buyPath:'/', 
    comparePath:'/'
  } 
]

const SERVICE_ITEMS = [
  {
    id:1, 
    title:'Dịch vụ thiết kế mô hình 3D', 
    desc:'Mô hình 3D có độ chính xác cao, phù hợp với mọi nhu cầu.', 
    image:serviceItem1, 
    path:''
  }, 
  {
    id:2, 
    title:'Dịch vụ in 3D', 
    desc:'Bản in 3D sắc nét, chi tiết với chất lượng vượt trội.', 
    image:serviceItem2, 
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

const BANNER_ITEMS = [
  { id:1, img:homeBanner1 },
  { id:2, img:homeBanner2 },
  { id:3, img:homeBanner3 },
  { id:4, img:homeBanner4 },
  { id:5, img:homeBanner5 } 
]

const SABAN_ITEMS =[
  {
    title: 'Mô hình cao tầng', 
    image: saban1, 
    path:'/'
  }, 
  {
    title: 'Mô hình nhà máy', 
    image: saban2, 
    path:'/'
  }, 
  {
    title: 'Mô hình quy hoạch', 
    image: saban3, 
    path:'/'
  }
]
const PARTNER_ITEMS = [
  {
    id:1,
    image:partnerItem1
  }
]

function Home() {
  return ( 
    <Box className={cx('home-container')}>
      {/* HOME BANNER */}
      <PageBanner bannerItems={BANNER_ITEMS}/>
      {/* HOME MAIN CONTENT */}
      <Box sx={{ paddingBottom:'4rem', marginTop:{ md:'7rem', xs:'4rem' }, textAlign:'center' }}>
        <Container maxWidth='xl'>
          <Typography varient='h1' fontWeight={700} fontSize={{ xs:'var(--title-fs-sm)', md:'var(--title-fs-md)' }}>
              3D Store
          </Typography>
          <Typography varient='h6' fontSize={{ xs:'var(--desc-fs-sm)', md:'var(--desc-fs-md)' }} >
              Khám phá về những sản phẩm tuyệt vời của chúng tôi
          </Typography>
          <Stack gap={2} direction={{ md:'row', xs:'column' }} mt={'2rem'}>
            {
              STORE_ITEMS.map(storeItem => (
                <div key={storeItem.id} style={{ backgroundImage:`url(${storeItem.image})` }} className={cx('store-item_bg')}>
                  <div className={cx('store-item_text')}>
                    <Typography variant="h1" fontWeight={600} fontSize={{ md:'var(--item-title-fs-md)', xs:'var(--item-title-fs-sm)' }}>
                      {storeItem.title}
                    </Typography>
                    <Typography varient='h6' fontSize={{ md:'var(--item-desc-fs-md)', xs:'var(--item-desc-fs-sm)' }} padding='10px 0'>
                      {storeItem.desc}
                    </Typography>
                    <Link color="primary" underline="hover" href={storeItem.buyPath}
                      sx={{ cursor:'pointer', display:'flex', flexDirection:'row', justifyContent:'center' }} > 
                      <p>Tìm hiểu thêm</p>
                      <KeyboardArrowRight sx={{ marginTop:'2px' }}/>
                    </Link>
                  </div>
                </div>
              ))
            }
          </Stack>
        </Container>
        <Container sx={{ marginTop:{ md:'7rem', xs:'4rem' }, textAlign:'center' }} maxWidth='xl'>
          <Typography varient='h1' fontWeight={700} fontSize={{ xs:'var(--title-fs-sm)', md:'var(--title-fs-md)' }}>
              3D Service
          </Typography>
          <Typography varient='h6' fontSize={{ md:'var(--item-desc-fs-md)', xs:'var(--item-desc-fs-sm)' }} >
              cá nhân hoá sản phẩm theo nhu cầu của khách hàng
          </Typography>
          <Stack gap={2} direction={{ md:'row', xs:'column' }} mt={'2rem'}>
            {SERVICE_ITEMS.map(serviceItem => (
              <Box position="relative" sx={{ cursor:'pointer' }} key={serviceItem.id}>
                <div className={cx('image-slider')}>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ dynamicBullets: true }}
                                            
                  >
                    <SwiperSlide>
                      <picture>
                        <img src={serviceItem.image} className={cx('service-item_bg')}/>
                      </picture>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className={cx('service-item_text')}>
                  <Stack direction="row" justifyContent="space-between">
                    <Box>
                      <Typography varient='h1' fontWeight={600} fontSize={{ md:'3rem', xs:'2rem' }}
                        textAlign={'left'}>
                        {serviceItem.title}
                      </Typography>
                      <Typography varient='h6' fontSize={{ md:'1.6rem', xs:'1.4rem' }}
                        textAlign={'left'}>
                        {serviceItem.desc}
                      </Typography>
                    </Box>
                    <button className={cx('action')}>
                      <ArrowForward fontSize="medium" sx={{ color:'#fff' }}/>
                    </button>
                  </Stack>
                </div>
              </Box>
            ))}
          </Stack>
        </Container>
        {/* architecture model 3 */}
        <Container className={cx('news-container')} sx={{ marginTop:{ md:'100px', xs:'50px' }, textAlign:'center' }} maxWidth='xl'>
          <Typography variant="h1" fontWeight="bold" textAlign="center" fontSize={{ md:'3.5rem', xs:'2.5rem' }}marginBottom="5px">
                        Mô Hình Sa Bàn
          </Typography>
          <Typography variant="body1" textAlign="center" fontSize={{ md:'1.8rem', xs:'1.5rem' }}>
                        Thiết kế mô hình sa bàn chi tiết, tái hiện chính xác các dự án xây dựng.
          </Typography>
          <Stack gap={{ xs:1, md:4 }} mt={'2rem'} direction={{ xs: 'column', md: 'row' }} >
            {
              SABAN_ITEMS.map((sabanItem, index) => (
                <div key={index} className={cx('architecture-model_item')} style={{ backgroundImage:`url(${sabanItem.image})` }}>
                  <div className={cx('architecture-model_item__content')}>
                    <Typography variant="h1" fontWeight="bold" textAlign="center" fontSize={{ md:'3rem', xs:'2rem' }} color="#fff"
                    >
                      {sabanItem.title}
                    </Typography>
                    <Link to={sabanItem.path} underline="hover" fontSize={{ md:'1.6rem', xs:'1.4rem' }} sx={{ cursor:'pointer' }}>
                      {/* Learn more */}
                                            Tìm hiểu thêm
                      <KeyboardArrowRight />
                    </Link>
                  </div>
                </div>
              ))
            }
          </Stack>
        </Container>
        <Box className={cx('slogan_bg')} marginTop={'100px'}>
          <Typography varient='h6' fontSize={{ md:'3.5rem', xs:'2.5rem' }} fontWeight={700} position={'relative'} zIndex={'10'} maxWidth={'800px'}>
                        Biến Ý Tưởng Của Khách Hàng Thành Hiện Thực
          </Typography>
        </Box>
        {/* NEWS */}
        {/* <News/> */}
        <Container sx={{ marginTop:{ md:'100px', xs:'50px' }, textAlign:'center' }} maxWidth='xl'>
          <Typography variant="h1" fontSize={{ md:'3.5rem', xs:'2.5rem' }} fontWeight={700}>
                        Đối tác của chúng tôi
          </Typography>
          <Stack mt={'2rem'}>
            {
              PARTNER_ITEMS.map(partnerItem => (
                <img src={partnerItem.image} key={partnerItem.id} style={{ width:'11rem' }}/>
              ))
            }
           
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Home