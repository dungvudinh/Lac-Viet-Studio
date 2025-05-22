import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Cart.module.scss'
import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemAvatar, Stack, Link, Skeleton } from '@mui/material'
import { Close } from '@mui/icons-material'
import { RemoveIcon, AddIcon } from '~/assets/Icons'

const cx = classNames.bind(styles)
const CART_ITEMS = [
  {
    id: 1,
    name: '3D Printer Filament',
    price: 29.99,
    image: 'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
    quantity: 2
  },
  {
    id: 1,
    name: '3D Printer Filament',
    price: 29.99,
    image: 'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
    quantity: 2
  },
  {
    id: 1,
    name: '3D Printer Filament',
    price: 29.99,
    image: 'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
    quantity: 2
  },
  {
    id: 1,
    name: '3D Printer Filament',
    price: 29.99,
    image: 'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
    quantity: 2
  },
  {
    id: 1,
    name: '3D Printer Filament',
    price: 29.99,
    image: 'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
    quantity: 2
  },
  {
    id: 1,
    name: '3D Printer Filament',
    price: 29.99,
    image: 'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
    quantity: 2
  },

  {
    id: 1,
    name: '3D Printer Filament',
    price: 29.99,
    image: 'https://store.bblcdn.com/s1/default/84be8e60e0f244d0b77a73b1f7b09ff9.png__op__resize,m_lfit,w_640__op__format,f_auto__op__quality,q_80',
    quantity: 2
  }
  // Add more items as needed
]
function Cart({ isCartOpen, onCloseCart }) {
  //fake API
  const [isLoaded, setIsLoaded]= useState(true)

  return (
    <Drawer
      anchor="right"
      open={isCartOpen}
      onClose={onCloseCart}
      PaperProps={{
        sx: { width: { md:380, xs:350 } }
      }}
      sx={{ zIndex: 1220 }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 2, borderBottom: '1px solid', borderColor:'lineColor.main' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, fontSize:'1rem' }}>Cart</Typography>
            <IconButton onClick={onCloseCart}>
              <Close />
            </IconButton>
          </Box>
        </Box>
        {isLoaded 
          ?
          <List sx={{ flex: 1, overflowY: 'auto', py: 0, padding:'0 10px' }}>
            {CART_ITEMS.map((item, index) => (
              <ListItem key={index} divider alignItems='center' sx={{ height:150, border:0 }}>
                <ListItemAvatar sx={{ height:'100%' }}>
                  <img src={item.image} style={{ height:'80%', objectFit:'cover' }}/>
                </ListItemAvatar>

                <Stack ml={3} justifyContent="flex-start" height="100%" width="100%">
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight:600, fontSize:'var(--fs-md)' }} >
                      {item.name}
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop:'0.5rem', color:'textColorLight', fontSize:'var(--fs-md)' }}>
                      ${item.price}
                    </Typography>
                  </Box>

                  <Stack direction="row" alignItems="center" justifyContent="flex-start" mt={2}>
                    <Box border="1px solid #ddd" padding={0.7} display='flex' justifyContent='space-between' alignItems='center'>
                      {/* <Remove fontSize='small'/> */}
                      <RemoveIcon />
                      <input className={cx('cart-item_quantity')} defaultValue={item.quantity}/>
                      <AddIcon />
                      {/* <Add fontSize='small'/> */}
                    </Box>
                    <Link underline='always' color='black' sx={{ cursor:'pointer', fontSize:'var(--fs-sm)', marginLeft:'1rem' }}>Xoá bỏ</Link>
                  </Stack>
                </Stack>
              </ListItem>
            ))}
          </List>
          
          :
          <SkeletonLoaded />
        }
        {isLoaded && (
          <Box sx={{ p: 2, borderTop: '1px solid #eee', bgcolor: 'background.paper' }}>
            <Typography variant="h6" sx={{ mb: 2, fontSize:'var(--fs-md)', color:'textColorLight' }}>
              Phí vận chuyển sẽ được tính khi thanh toán
              {/* Thành Tiền: ${CART_ITEMS.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)} USD */}
            </Typography>
            <button className={cx('payment-button')}>
                Thanh Toán
              <span className='dot'></span>
                1,400,000đ
            </button>
          </Box>
        )}
      </Box>
    </Drawer>
  )
}

const SkeletonLoaded = () => {
  return (
    <Box sx={{ width: 300, padding:'1rem' }}>
      <Skeleton animation="wave" width={100} sx={{ mb:1 }}/>
      <Skeleton animation="wave" sx={{ mb:1 }}/>
      <Skeleton animation="wave" sx={{ mb:1 }}/>
      <Skeleton animation="wave" width={150} sx={{ mb:1 }}/>
      <Skeleton animation="wave" sx={{ mb:1 }}/>
    </Box>
  )
}
export default Cart