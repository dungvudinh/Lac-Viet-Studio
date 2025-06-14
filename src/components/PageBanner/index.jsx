import styles from './PageBanner.module.scss'
import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Button, Typography } from '@mui/material'
import { ArrowForwardIos } from '@mui/icons-material'
import LazyLoadBackgroundImage from '~/components/LazyLoadBackgroundImage'
import { ArrowLeft, ArrowRight } from 'lucide-react'
const cx = classNames.bind(styles)

function PageBanner({ banner, belongTo }) {
  return ( 
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ dynamicBullets: true }}
      autoplay={{ delay: 3000 }}
    >
      {banner.items.map((item, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <BannerItem item={item} buttons={banner.buttons}className={isActive ? 'active' : ''} belongTo={belongTo}/>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const BannerItem = ({ item, buttons, className, belongTo }) => {
  return (
    <LazyLoadBackgroundImage src={item.bgUrl} className={cx('hero-slide__item', `${className}`)} style={{ padding:`${belongTo === 'home' ? '20rem 0' : '13rem 0'}` }}>
      <div className={cx('hero-slide__item__content')}>
        <div className={cx('hero-slide__item__content__info')}>
          <Typography varient='h1' fontSize={{ xs:'1.5rem', md:'2.5rem' }} fontWeight='600' className={cx('title')}>{item.title}</Typography>
          <Typography varient='h6' fontSize={{ xs:'1rem', md:'1.2rem' }} className={cx('overview')}>
            {item.desc}
          </Typography>
          <div className={cx('btns')}>
            {
              buttons.map(button=>{
                if(button.type ==='primary')
                {
                  return (
                    <Button variant="contained" color='primary'
                      sx={{ color:'var(text-white)', textTransform:'none', fontSize:{ md:'var(--fs-lg)', xs:'var(--fs-md)' }, display:'flex', 
                        alignItems:'center', padding:'0.5rem 1.5rem'
                      }} className={cx('primary-btn bg-gradient')}>
                      <p>{button.title}</p>
                      <ArrowRight className='ml-2'/>
                    </Button>
                  )
                }
                else if(button.type === 'secondary')
                {
                  return (
                    <Button variant="outlined" className={cx('secondary-btn')}
                      sx={{ 
                        color:'var(--text-white)',
                        textTransform:'none',
                        display:'flex', 
                        alignItems:'center',
                        padding:'0.5rem 1.5rem',
                        fontSize:{ md:'var(--fs-lg)', xs:'var(--fs-md)' },
                      }}>
                      <p>{button.title}</p>
                      <ArrowRight className='ml-2'/>
                    </Button>
                  )
                }
              })
            }
            
            
          </div>  
        </div>
      </div>
    </LazyLoadBackgroundImage>
    // <div className={cx('hero-slide__item', `${className}`)} style={{ backgroundImage:`url(${image})`, padding:`${belongTo === 'home' ? '20rem 0' : '13rem 0'}` }}>
      
  // </div>
  )
}

export default PageBanner