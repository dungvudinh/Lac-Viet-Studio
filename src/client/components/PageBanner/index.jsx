import styles from './PageBanner.module.scss'
import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Button, Typography } from '@mui/material'
import { ArrowForwardIos } from '@mui/icons-material'
const cx = classNames.bind(styles)

function PageBanner({ bannerItems }) {
  return ( 
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ dynamicBullets: true }}
      autoplay={{ delay: 3000 }}
    >
      {bannerItems.map((item) => (
        <SwiperSlide key={item.id}>
          {({ isActive }) => (
            <BannerItem image={'https://cdn1.bambulab.com/home/banner/a1mini-pc.jpeg'} className={isActive ? 'active' : ''}/>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const BannerItem = ({ image, className }) => {
  return (
    <div className={cx('hero-slide__item', `${className}`)} style={{ backgroundImage:`url(${image})` }}>
      <div className={cx('hero-slide__item__content')}>
        <div className={cx('hero-slide__item__content__info')}>
          <Typography varient='h1' fontSize={{ xs:'1.5rem', md:'2.5rem' }} fontWeight='600' className={cx('title')}>Bambu Lab X1C</Typography>
          <Typography varient='h6' fontSize={{ xs:'1rem', md:'1.2rem' }} className={cx('overview')}>
                    A Leap in 3D Printing, the Flagship Core-XY 3D Printer
          </Typography>
          <div className={cx('btns')}>
            <Button variant="contained" color='primary' 
              sx={{ color:'#fff', width:'11rem', textTransform:'none', fontSize:{ md:'var(--fs-lg)', xs:'var(--fs-md)' }, display:'flex', 
                alignItems:'center', padding:'0.5rem 1rem'
              }}>
              <p>Buy now</p>
              <ArrowForwardIos fontSize='small' sx={{ marginLeft:'1rem', width:'1rem', height:'1rem' }}/>
            </Button>
            <Button variant="outlined" color='white' 
              sx={{ color:'#fff', width:'11rem', textTransform:'none',
                display:'flex', 
                alignItems:'center',
                padding:'0.5rem 1rem',
                fontSize:{ md:'var(--fs-lg)', xs:'var(--fs-md)' }
              }}>
              <p>Learn more</p>
              <ArrowForwardIos fontSize='small' sx={{ marginLeft:'1rem', width:'1rem', height:'1rem' }}/>
            </Button>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default PageBanner