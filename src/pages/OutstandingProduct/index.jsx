import classNames from 'classnames/bind'
import styles from './OutstandingProduct.module.scss'
import { Box, Typography, Container, Stack} from '@mui/material';
import PageBanner from '~/components/PageBanner';
import { homeBanner1 } from '~/assets/Images/Banner'
import { Zap, Users,Box as BoxIcon } from 'lucide-react';
const cx = classNames.bind(styles)
const BANNER = {
    buttons:[
        {title:'Buy now', type:'primary'}, 
        {title:'Learn more', type:'secondary'}
    ],
    items:[
        {bgUrl:homeBanner1, title: 'TEST 1', desc:'Lorem ipsum dolor sit amet'}, 
        // {bgUrl:homeBanner2, title:'TEST 2', desc:'Lorem ipsum dolor sit amet'}, 
        // {bgUrl:homeBanner3, title:'TEST 3', desc:'Lorem ipsum dolor sit amet'}, 
        // {bgUrl:homeBanner4, title:'TEST 4', desc:'Lorem ipsum dolor sit amet'}, 
        // {bgUrl:homeBanner5, title:'TEST 5',desc: 'Lorem ipsum dolor sit amet'}
    ]
}
const OUTSTANDING_NUMBERS = [
    { icon: (color, fontSize)=><Zap color={color} fontSize={fontSize}/>, label: 'Projects Completed', value: '500+' },
    { icon: (color, fontSize)=><Users color={color} fontSize={fontSize}/>, label: 'Happy Clients', value: '200+' },
    { icon:(color, fontSize)=> <BoxIcon color={color} fontSize={fontSize}/>, label: 'Categories', value: '15+' },
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
                            sx={{fontWeight:700, fontSize:{xs:'var(--title-fs-sm)', md:'var(--title-fs-md)' }}}>
                                Future
                            </Typography>
                        </Typography>
                        <Typography varient='h6' className='mt-2' fontSize={{ xs:'var(--desc-fs-sm)', md:'var(--desc-fs-md)' }} sx={{maxWidth:'50rem'}}>
                            At Lạc Việt, we transform imagination into reality through cutting-edge 3D technology. Our team of expert designers and engineers push the boundaries of what's possible, delivering innovative solutions that revolutionize industries.
                        </Typography>
                        {/* OUTSTANDING NUMBERS */}
                        <Stack direction={'row'} justifyContent={'space-around'} sx={{width:'100%',marginTop:'4rem'}}>
                           {OUTSTANDING_NUMBERS.map((item, index)=>{
                            const Icon = item.icon('var(--primary-color)', '22px')
                            return (
                                <Box key={index}>
                                    <Box className='p-2'sx={{backgroundColor:'var(--primary-color-bg-2)'}}>
                                        <Icon />
                                    </Box>
                                    <Typography variant='p'>{item.label}</Typography>
                                    <Typography variant='h1'>{item.value}</Typography>
                                </Box>)
                            
                           })}
                        </Stack>
                    </Box>
                    
                </Container>
            </Box>
        </Box>
    )
}
export default OutstandingProduct;