import React from 'react'
import { Box, Accordion, AccordionSummary, AccordionDetails, List, ListItem, Typography } from '@mui/material'
import { ExpandMore, HorizontalRuleOutlined, Store, StoreOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'
import logo from '~/shared/assets/Images/logo.png'
import { AppIcon, DashboardIcon } from '~/shared/assets/Icons'
import routes from '~/admin/configs/Routes'
const cx = classNames.bind(styles)
function Sidebar() {

  return (
    <Box className={cx('sidebar')}>
      {/* Logo section */}
      <Box className={cx('logo-container')} sx={{ borderBlockEnd:'1px solid rgba(255, 255, 255, 0.1)' }}>
        <img src={logo}/>
      </Box>
      <Typography varient='h6' sx={{ padding:'10px 16px', color:'var(--sidebar-text-color)', fontWeight:700, fontSize:'var(--fs-sm)' }}>
        Thông tin chung
      </Typography>
      {/* Accordion Menu */}
      <Accordion
        sx={{
          backgroundColor:'transparent', 
          color:'#fff',
          '&.Mui-expanded':{ margin:0 },
          '&::after': {
            content: 'none'
          },
          '&::before': {
            content: 'none'
          }
        }}>
        <AccordionSummary
          expandIcon={<ExpandMore sx={{ color:'white.main' }}/>}
          aria-controls="dashboard-content"
        >
          <DashboardIcon />
          <Typography varient='h6' fontWeight={600} paddingLeft={'0.5rem'} fontSize={'var(--fs-lg)'}>Dashboard</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ color:'#fff', padding:0 }}>
            <ListItem component={Link} to="/admin" className={cx('sidebar-item_child')}>
              <HorizontalRuleOutlined fontSize='small'/>
              <Typography fontWeight={600} fontSize='var(--fs-lg)' marginLeft={'0.5rem'}>Thống Kê Bán Hàng</Typography>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>


      <Typography varient='h6' sx={{ padding:'10px 16px', color:'var(--sidebar-text-color)', fontWeight:700, fontSize:'var(--fs-sm)' }}>
        Danh mục
      </Typography>
      {/* Accordion Menu */}
      <Accordion
        sx={{ 
          backgroundColor:'transparent', 
          color:'#fff',
          '&.Mui-expanded':{ margin:0 },
          '&::after': {
            content: 'none'
          },
          '&::before': {
            content: 'none'
          }
        }}>
        <AccordionSummary
          expandIcon={<ExpandMore sx={{ color:'white.main' }}/>}
          aria-controls="dashboard-content"
        >
          {/* <AppIcon /> */}
          <StoreOutlined fontSize='small'/>
          <Typography varient='h6' fontWeight={600} paddingLeft={'0.5rem'} fontSize={'var(--fs-lg)'}>Cửa Hàng</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List sx={{ color:'#fff', padding:0 }}>
            <ListItem component={Link} to={'/admin/store/toy'} className={cx('sidebar-item_child')}>
              <HorizontalRuleOutlined fontSize='small'/>
              <Typography fontWeight={600} fontSize='var(--fs-lg)' marginLeft={'10px'}>Đồ Chơi</Typography>
            </ListItem>
            <ListItem component={Link} to={'/admin/store/decor'} className={cx('sidebar-item_child')}>
              <HorizontalRuleOutlined fontSize='small'/>
              <Typography fontWeight={600} fontSize='var(--fs-lg)' marginLeft={'10px'}>Đồ Decor</Typography>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Sidebar