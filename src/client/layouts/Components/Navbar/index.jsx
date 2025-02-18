import { useState, createContext, useContext, useRef, useEffect, useLayoutEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Navbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Button, Menu, MenuItem, IconButton, ListItemIcon, ListItemText, Box, ListItemButton, 
  Drawer, Divider, Accordion, AccordionSummary, AccordionDetails, Avatar, Tooltip,
  FormControl, Select, List, Typography,
  Container
} from '@mui/material'
import { ExpandMore, Settings, Logout, KeyboardArrowRight, ShoppingCart,
  Login as LoginIcon, Close
} from '@mui/icons-material'
import { logo, vietnam, england } from '~/client/assets/Images'
import { UserIcon, FireIcon } from '~/client/assets/Icons'
import { deepOrange } from '@mui/material/colors'
import Cart from '~/client/components/Cart'

const cx = classNames.bind(styles)
//NAVBAR DATA
const NAV_ITEMS = [
  {
    display:'3D Store', 
    belongTo: ['home', 'store', 'product', 'profile-setting'],
    content:[
      {
        title: 'Đồ chơi trẻ em', 
        contentChild:[
          {
            title:'Bambu Lab X1 Series', 
            desc: 'State-of-the-art Core XY 3D printer', 
            image:'https://cdn1.bambulab.com/common/navbar-x1.png' 

          },
          {
            title:'Bambu Lab X1 Series', 
            desc: 'State-of-the-art Core XY 3D printer', 
            image:'https://cdn1.bambulab.com/common/navbar-x1.png' 

          }
        ]
      }, 
      {
        title:'Mô hình trang trí', 
        contentChild:[
          {
            title:'Bambu Lab X1 Series', 
            desc: 'State-of-the-art Core XY 3D printer', 
            image:'https://cdn1.bambulab.com/common/navbar-x1.png' 

          },
          {
            title:'Bambu Lab X1 Series', 
            desc: 'State-of-the-art Core XY 3D printer', 
            image:'https://cdn1.bambulab.com/common/navbar-x1.png' 

          }
        ]
      }
    ]
  }, 
  {
    display:'Dịch Vụ', 
    path:'/service', 
    belongTo:['home', 'store', 'product', 'profile-setting'] 

  }, 
  {
    display:'Mô Hình Sa Bàn', 
    path:'', 
    belongTo:['home', 'profile-setting']
  }, 
  {
    display:'Tin Tức',
    path:'/news',
    belongTo:['home', 'news', 'profile-setting']
  },
  {
    display:'Sale Cuối Năm', 
    path:'/sale', 
    belongTo:['store', 'product'], 
    icon:({ width, height, className }) => (<FireIcon width={width} height={height} className={className}/>)
  }, 
  {
    display:'Liên hệ', 
    path:'/contact-us', 
    contentType:'link',
    belongTo:['home', 'profile-setting']
  } 
]

const LANGUAGES = [
  {
    name:'English', 
    image: england, 
    value:'en'
  }, 
  {
    name:'Tiếng Việt', 
    image:vietnam, 
    value:'vi'
  }
]   

const SETTING_ITEMS = [
  {
    primary:'Profile setting', 
    secondary:'', 
    path:'/account/setting', 
    icon:(fontSize) => <Settings fontSize={fontSize}/>
  }, 
  {
    primary: 'Log out', 
    secondary:'', 
    path:'logout', 
    icon:(fontSize) => <Logout fontSize={fontSize}/> 
  }
]

function Navbar({ belongTo }) {
  const navigate = useNavigate()
  const [navBgColor, setNavBgColor] = useState('')
  const [currentLocale, setCurrentLocale] = useState(() => {
    const currentLocale = localStorage.getItem('locale')
    if (!currentLocale)
      return navigator.language.split('-')[0]
    return localStorage.getItem('locale')
  })
  const [isLogin, setIsLogin] = useState(true)
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false)
  const [isCartOpen, setIsCartOpen]= useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // EFFECT HOOKS
  useLayoutEffect(() => {
    const detectScrollView = () => {
      document.documentElement.scrollTop > 100 ? setNavBgColor('black') : setNavBgColor('')
    }
    if (belongTo === 'home')
    {
      setNavBgColor('')
      window.addEventListener('scroll', detectScrollView)
    }
    else if (belongTo === 'store') setNavBgColor('white')
    else if (belongTo === 'profile-setting') setNavBgColor('black')
    return () => window.removeEventListener('scroll', detectScrollView)
  }, [belongTo])

  // HANDLE FUNCTION
  const handleChangeLanguage= (event) => {
    setCurrentLocale(event.target.value)
    localStorage.setItem('locale', event.target.value)
  }
  const handleToggleSidebar = () => {
    setIsSidebarOpen(prev => !prev)
    // setNavBgColor(isSidebarOpen ? '' : 'black')
  }

  return ( 
    <Box className={cx('navbar', `${navBgColor}`)}>
      <Container maxWidth='xl' sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', position:'relative' }}>

        {/* MENU FOR MOBILE UI */}
        <Box sx={{ display:{ xs:'block', md:'none' }, left:'1rem' }}>
          <IconButton size='small' onClick={handleToggleSidebar}>
            <FontAwesomeIcon icon={faBars} color={navBgColor === 'black' || navBgColor === '' ? '#FFF' : '#111'}/>
          </IconButton>
        </Box>

        {/* LEFT CONTENT OF NAVBAR */}
        <Box sx={{ display:'flex', direction:'row' }} className={cx('left-navbar')}>
          {/* NAVBAR LOGO */}
          <Box sx={{ width:{ md:'4rem', xs:'3.5rem' } }}>
            <Link to='/'>
              <img src={logo} alt="logo" className={cx('navbar-logo')}/>
            </Link>
          </Box>

          {/* NAVBAR ITEMS */}
          <Box sx={{ display:{ md:'flex', xs:'none' }, alignItems:'center', mb:0 }}>
            <ul className={cx('nav-items', `${navBgColor}`)}>
              {NAV_ITEMS
              // .filter(navItem => navItem.belongTo.includes(belongTo))
                .map((navItem, index) => (
                  <li className={cx('nav-item')} key={index}>
                    {navItem.path 
                      ?
                      <Link to={navItem.path} >
                        {navItem.icon && <navItem.icon width={20} height={20} className='mr-2'/>}
                        {navItem.display}
                      </Link>
                      :
                      navItem.display
                    }
                  </li>
                ))
              }
            </ul>
          </Box>
        </Box>

        {/* RIGHT CONTENT OF NAVBAR */}
        <Box sx={{ display:'flex', alignItems:'center' }}>

          {/* LANGUAGE OPTION */}
          <FormControl fullWidth sx={{ maxWidth:200, display:{ xs:'none', md:'block' } }}>
            <Select sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, 
              '& .MuiSvgIcon-root':{ color:(navBgColor === '' || navBgColor === 'black') ? '#FFF' : '#111' }, 
              '& .MuiSelect-select':{ display:'flex', alignItems:'center' }, 
              '& .MuiTypography-root':{ color:(navBgColor === '' || navBgColor === 'black') ? '#FFF' : '#111' }, 
              color:(navBgColor === '' || navBgColor === 'black') ? '#FFF' : '#111' 
            }}
                                    
            size='small' value={currentLocale} onChange={handleChangeLanguage}>
              {LANGUAGES.map((language, index) => (
                <MenuItem key={index} value={language.value} sx={{ display:'flex', alignItems:'center' }}>
                  <ListItemIcon sx={{ minWidth:30, display:'flex', alignItems:'center' }}>
                    <img src={language.image} style={{ width:20 }}/>
                  </ListItemIcon>
                  <ListItemText primary={language.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* NAVBAR ACTION */}
          <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            {(belongTo == 'home' || belongTo === 'profile-setting') 
              ?
              <Button variant="contained" color='primary' size='small' sx={{ ml:{ md:'1rem' }, fontSize:{ xs:'var(--fs-md)' } }}
                onClick={() => navigate('/store')}>
                  Store
              </Button>
              :
              // <IconButton  
              //   color={(navBgColor === '' || navBgColor === 'black') ? '#111' : '#111'} 
              //   sx={{ margin:{ xs:0, md:'0 2rem' } }}
              //   onClick={() => setIsCartOpen(true)}
              // >
              // </IconButton>
              <button className={cx('cart-button')} onClick={() => setIsCartOpen(true)}>
                <ShoppingCart sx={{ color:(navBgColor === '' || navBgColor === 'white') ? '#111' : '#FFF' }} fontSize='small'/>
                <span className={cx('cart-noti', `${navBgColor}`)}></span>
              </button>
            }
            <Box display={{ xs:'none', md:'block' }}>
              {
                isLogin 
                  ?
                  <UserMenu navBgColor={navBgColor}/>
                  :
                  <Typography onClick={() => setIsLoginDialogOpen(true)} fontWeight={600} sx={{ cursor:'pointer', color:(navBgColor === '' || navBgColor === 'black') ? '#FFF' : '#111' }}>
                      Log In
                  </Typography>
              }
            </Box>

            
          </Box>
        </Box>
      </Container>
      <Cart isCartOpen={isCartOpen} onCloseCart={() => setIsCartOpen(false)}/>
      <Sidebar isLogin={isLogin} isSidebarOpen={isSidebarOpen} onToggleSidebar={handleToggleSidebar}/>
    </Box>
  )
}


const UserMenu = ({ navBgColor }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }
  return (
    <Box ml={'1rem'}>
      <Tooltip title="Account settings" >
        <IconButton
          onClick={handleOpenMenu}
          size="large"
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          {/* <Avatar sx={{ bgcolor: deepOrange[500], width: 30, height: 30 }}>DV</Avatar> */}
          {/* <AccountCircle  sx={{color:belongTo === 'white ' ? '#111' : '#fff'}} fontSize='large'/> */}
                    
          <UserIcon width={20} height={20} color={(navBgColor === '' || navBgColor === 'black') ? '#FFF' : '#111'}/>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        slotProps={{
          paper:{
            sx:{ minWidth:200 }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
            
        <MenuItem>
          {/* <ListItemIcon> */}
          <Avatar sx={{ bgcolor: deepOrange[500], width: 30, height: 30, marginRight:'10px' }}>DV</Avatar>
          {/* </ListItemIcon> */}
          <ListItemText primary={'Dungg'} secondary={'anhkho881@gmail.com'}/>
        </MenuItem>
        <Divider />
        {SETTING_ITEMS.map((settingItem, index) => (
          <MenuItem key={index} onClick={handleCloseMenu}>
            <Link to={settingItem.path} className='d-flex flex-row align-items-center text-decoration-none text-black'>
              {settingItem.icon && (
                <ListItemIcon>
                  {settingItem.icon('medium')}
                </ListItemIcon>
              )}
              <ListItemText primary={settingItem.primary} secondary={settingItem.secondary} />
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

const Sidebar = ({ isLogin, isSidebarOpen, onToggleSidebar }) => {
  const [isExpandSideItem, setExpandSideItem]= useState(false)
  const navigate = useNavigate()
  const handleChange = (panel) => (event, isExpanded) => setExpandSideItem(isExpanded ? panel : false)
  const handleDirectAccPage = () => {
    onToggleSidebar()
    navigate('/account')
  }
  return (
    <Drawer open={isSidebarOpen} sx={{ height:'100%', overflowY:'hidden', zIndex:1220 }} onClose={onToggleSidebar} anchor='left'
      transitionDuration={{ enter:500, exit:500 }} 
      PaperProps={{
        sx: { width: { md:380, xs:300 }, backgroundColor:'black.main' }
      }}>
      <Box sx={{ width:'100%', position:'relative', height:'100vh', overflowY:'auto' }} role="presentation">
        <Box 
          sx={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', padding:'1rem 0' }}>
          <IconButton onClick={onToggleSidebar}>
            <Close sx={{ color:'white.main' }}/>
          </IconButton>
        </Box>
        {NAV_ITEMS.map((navItem, index) => (
          navItem.content ? (
            <Accordion key={index} square={true} disableGutters={true} expanded={isExpandSideItem === navItem.name} 
              onChange={handleChange(navItem.name)} sx={{ backgroundColor:'#111' }}>
              <AccordionSummary expandIcon={navItem.content && <ExpandMore color='white'/> } 
                aria-controls={'panel1-content'} id={'panel1-header'} >
                <Typography color='white' sx={{ fontSize:'var(--fs-md)' }}>
                  {navItem.display}
                </Typography>
              </AccordionSummary>
              {navItem.content && (
                <AccordionDetails sx={{ padding:0, color:'white.main' }}>
                  <List sx={{ paddingLeft:'10px' }}>
                    {navItem.content && navItem.content.map((navItemChild, ix) => (
                      <ListItemButton key={ix}>
                        <Link to={navItemChild.path} className={cx('sidebar-item_link__child')}>
                          <Typography sx={{ fontSize:'var(--fs-md)' }}>{navItemChild.title}</Typography>
                          <IconButton>
                            <KeyboardArrowRight sx={{ color:'var(--text-white)' }}/>
                          </IconButton>
                        </Link>
                      </ListItemButton>
                    ))}
                                    
                  </List>
                </AccordionDetails>
              )}
            </Accordion>)
            :
            <ListItemButton key={index} onClick={onToggleSidebar} 
              sx={{ padding:'0 16px' }}>
              <Link to={navItem.path} className={cx('sidebar-item_link')} style={{ width: '100%', borderBottom:'1px solid var(--item-border-color)', color:'var(--text-white)', padding:'12px 0' }}>
                {navItem.display}
              </Link>
            </ListItemButton>
        ))}
               
      </Box>
      <Box sx={{ position:'absolute', bottom:'0', width:'100%', backgroundColor:'black.main', color:'white.main' }}>
        <Divider />
        <ListItemButton color='dark' onClick={handleDirectAccPage} sx={{ borderTop:'1px solid var(--item-border-color)' }}>
          <ListItemIcon sx={{ minWidth:'2rem' }}>
            {isLogin 
              ?
              // <UserMenu navBgColor={'white'}/>
              <UserIcon width={18} height={18} color={'var(--text-white)'}/>
              :
              <LoginIcon size='small' sx={{ color:'white.main', width:'1rem' }}/>
            }
          </ListItemIcon>
          <Typography sx={{ fontSize:'var(--fs-md)' }}>{isLogin ? 'Dungg Vu' : 'Log In'}</Typography>
        </ListItemButton>

      </Box>
      {/* {isLogin && <MenuCustom open={open} onCloseMenu={handleClose} minWidth={200} anchorEl={anchorEl} menuList={settings} isMenuWithProfile={true}/>} */}
    </Drawer>
  )
}

export default Navbar