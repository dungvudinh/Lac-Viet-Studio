import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Store.module.scss'
import classNames from 'classnames/bind'
import { Box, Container, Typography, TextField, InputAdornment, IconButton, Button, Menu, MenuItem,
  ListItemIcon, Checkbox, Grid2 as Grid, Drawer, Pagination } from '@mui/material'
import { Search, Sort, Tune, Check, Close, KeyboardDoubleArrowRight, Clear } from '@mui/icons-material'
import PageBanner from '~/components/PageBanner'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '~/redux/features/thunks/productThunk'
import { resetProductState } from '~/redux/features/slices/productSlice'
import { setLoading } from '~/redux/features/slices/loadingSlice'
import { formatCurrency } from '~/utils/formatCurrency'
const cx = classNames.bind(styles)

const STORE_SIDEBAR_ITEMS = [
  {
    id:1,
    name:'category',
    display:'Danh mục',  
    type:'select', 
    content:[
      {
        id: 1, 
        title:'Đồ chơi trẻ em'
      }, 
      {
        id:2, 
        title:'Đồ trang trí'
      }
    ]
  }, 
  {
    id:2, 
    name:'price',
    display:'Giá (Đ)',  
    type:'checkbox', 
    content:[
      {
        id:1,
        title:'Dưới 100.000'
      },
      {
        id:2,
        title:'100.000 - 500.000'
      },
      {
        id:3,
        title:'500.000 - 1.000.000'
      },
      {
        id:4,
        title:'1.000.000 - 2.000.000'
      },
      {
        id:5,
        title:'Trên 2.000.000'
      }
    ]
  }, 
  {
    id:3, 
    name:'Tuổi',
    display:'Tuổi', 
    type:'age', 
    content:[
      {
        id:1,
        title:'Từ 0 - 1 tuổi'
      },
      {
        id:2,
        title:'Từ 1 - 3 tuổi'
      },
      {
        id:3,
        title:'Từ 3 - 6 tuổi'
      },
      {
        id:4,
        title:'Từ 6 - 12 tuổi'
      },
      {
        id:5,
        title:'12 tuổi trở lên'
      }
           
    ]
  } 
]

const SORT_ITEMS = [
  {
    id:1, 
    name:'Mặc định'
  }, 
  {
    id:2, 
    name:'Sản phẩm mới'
  }, 
  {
    id:3, 
    name:'Bán chạy'
  }, 
  {
    id:4, 
    name: 'Tên sản phẩm A - Z'
  }, 
  {
    id:5, 
    name: 'Tên sản phẩm Z - A'
  }, 
  {
    id:6, 
    name:'Giá giảm dần'
  }, 
  {
    id:7,
    name:'Giá tăng dần'
  }
]

const BANNER_ITEMS = [
  {
    id:1, 
    img:'https://store.bblcdn.com/s2/default/1bae02a6322f4c3b920dfcba71fa0dd7/PC_X1E-tuya.jpg__op__resize,m_lfit,w_3840__op__format,f_auto__op__quality,q_80'
  },
  {
    id:2, 
    img: 'https://store.bblcdn.com/s2/default/1bae02a6322f4c3b920dfcba71fa0dd7/PC_X1E-tuya.jpg__op__resize,m_lfit,w_3840__op__format,f_auto__op__quality,q_80'
  }
]

function Store() {
  const dispatch = useDispatch()
  const {products} = useSelector(state=> state.clientProduct)
  const [currentSortId, setCurrentSortId]= useState(1)
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false)
  const [filter, setFilter] = useState({
    category:null, 
    price: null, 
    age: null
  })
  const [page, setPage] = useState(1)
  const itemsPerPage = 8
  const totalItems = 50
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  useEffect(()=>
  {
    dispatch(setLoading(true))
    dispatch(fetchProducts('test'))
    dispatch(setLoading(false))
    return ()=>resetProductState()
  }, [])
  console.log(products)
  const handlePageChange = (event, value) => {
    setPage(value)
  }  
  const handleChangeFilter = (name, id) => setFilter(prevFilter => ({ ...prevFilter, [name]:id }))
  const handleChangeSort = (id) => setCurrentSortId(id)
  const handleToggleFilterSidebar = () => setIsFilterSidebarOpen(prev => !prev)
  return ( 
    <Box className={cx('store-container')}>
      <PageBanner bannerItems={BANNER_ITEMS} belongTo={'store'}/>
      <Container maxWidth='lg' className='mt-5'>
        <Typography varient='h1' sx={{ fontSize:{ md:'var(--title-fs-md)', xs:'var(--title-fs-sm)' }, fontWeight:700, textAlign:'center', marginBottom:'2rem' }}>
          3D Store
        </Typography>
        {/* SEARCH BAR */}
        <SearchBar currentSortId={currentSortId} onChangeSort={handleChangeSort}/>
        <Button sx={{ textTransform:'none', fontSize:'1rem', display:{ md:'none', xs:'flex' }, color:'var(--text-black)' }} onClick={handleToggleFilterSidebar}>
          Bộ lọc
          <Tune sx={{ marginLeft:'5px' }}/>
        </Button>
        {/* STORE CONTENT*/}
        <Grid container spacing={3} className={cx('main-content')}>
          {/* Left sidebar - Categories */}
                    
          <Grid size={3}>
            {/* SHOW CATEGORY ON DESKTOP OR TABLET VIEW */}
            <Box sx={{ display:{ md:'flex', xs:'none' }, flexDirection:'column' }}>
              <Category filter={filter} onChangeFilter={handleChangeFilter} currentSortId={currentSortId}/>
            </Box>
            {/* SHOW CATEGORY ON MOBILE VIEW */}
            <Box display={{ xs: 'block', md: 'none' }}>
              <Drawer
                anchor="left"
                open={isFilterSidebarOpen}
                onClose={handleToggleFilterSidebar}
                PaperProps={{
                  sx: { width: 300 }
                }}
                sx={{ zIndex: 1220 }}
              >
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding:'1rem', position:'relative' }}>
                  <Box sx={{ borderBottom: '1px solid #eee' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ fontSize: '1.4rem', fontWeight: 600 }}>Bộ Lọc</Typography>
                      <IconButton onClick={handleToggleFilterSidebar}>
                        <Close />
                      </IconButton>
                    </Box>
                  </Box>
                  <Box sx={{ flex: 1, overflowY: 'auto', my: 2 }}>
                    <Category filter={filter} onChangeFilter={handleChangeFilter} currentSortId={currentSortId}/>
                  </Box>
                  <Box sx={{ 
                    bgcolor: '#111',
                    position:'absolute',
                    bottom:0, width:'100%',
                    color:'#fff', padding:'1rem 0',
                    textAlign:'center',
                    marginLeft:'-1rem'
                  }}>
                    <Typography varient='h1' fontSize={'1rem'}>Hiển thị kết quả (5)</Typography>
                  </Box>
                </Box>
              </Drawer>
            </Box>
          </Grid>

          {/* Right content - Product list */}
          <Grid size={{ md:9, xs:12 }}>
            <div className={cx('product-grid')}>
              <Grid container spacing={3}>
                {products.length > 0 && products.map((item, index) => (
                  <Grid size={{ md:4, xs:6 }} key={index}>
                    <Link className={cx('product-item')} to={'/product-detail/1'}>
                      <div className={cx('image-container')}>
                        <img 
                          src={item.images[0].url}
                          alt="Product"
                        />
                      </div>
                      <h3 className={cx('product-name')}>{item.name}</h3>
                      <h3 className={cx('product-price')}>Từ {formatCurrency(item.sellingPrice)}đ
                        <span className={cx('product-old_price')}>{formatCurrency(item.listedPrice)}đ</span>
                      </h3>
                    </Link>
                  </Grid>
                ))}
              </Grid>
                            
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <Pagination 
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  size="large"
                  siblingCount={0}
                  boundaryCount={1}
                  sx={{
                    '& .MuiPaginationItem-root': {
                      fontSize: { md:'1rem', xs:'0.8rem' }
                    }
                  }}
                />
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}


const SearchBar = ({ currentSortId, onChangeSort }) => {
  const [anchorSortMenu, setAnchorSortMenu] = useState(null)
  return (
    <Box className={cx('search-container')} 
      sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', 
        flexDirection:'column', justifyContent:'flex-start', mt:'1rem' }}>
      <TextField
        fullWidth
        placeholder="Tìm kiếm sản phẩm ..."
        sx={{
          '& .MuiInputBase-input':{ fontSize:'var(--fs-lg)' },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderWidth: '1px'
            }
          }
        }}
        slotProps={{
          input:{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ), 
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={(event) => setAnchorSortMenu(event.currentTarget)} >
                  <Sort/>
                </IconButton>
                <Menu
                  anchorEl={anchorSortMenu}
                  open={Boolean(anchorSortMenu)}
                  onClose={() => setAnchorSortMenu(null)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  slotProps={{
                    paper:{
                      sx:{
                        minWidth:200
                      }
                    }
                  }}
                  defaultChecked={currentSortId}
                >
                  {SORT_ITEMS.map(sortItem => (
                    <MenuItem key={sortItem.id} onClick={() => {
                      onChangeSort(sortItem.id)
                      setAnchorSortMenu(null)
                    }} sx={{ fontWeight:600, justifyContent:'flex-end' }}>
                      {currentSortId === sortItem.id && (
                        <ListItemIcon>
                          <Check fontSize="small"/>
                        </ListItemIcon>
                      )}
                      {sortItem.name}
                    </MenuItem>
                  ))}
                </Menu>
              </InputAdornment>
            )
          } }
        }
        variant="outlined"
      />
    </Box>
  )
}
const Category = ({ currentSortId, filter, onChangeFilter }) => {
  return (
    <>
      <Box sx={{ padding:'1rem 0', borderBottom:'1px solid #e0e0e0' }}>
        <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexDirection:'row' }}>
          <Typography variant="h6" fontSize={'var(--fs-lg)'} fontWeight={700} color='primary'>Sắp xếp theo</Typography>
          <Typography variant='span' fontSize={{ md:'var(--fs-md)', xs:'var(--fs-sm)' }} sx={{ cursor:'pointer' }}>Xóa tất cả</Typography>  
        </Box>
        <ul className={cx('sort-by_content')}>
          {
            SORT_ITEMS.filter(sortItem => sortItem.id === currentSortId).map(sortItem => (
              <li className={cx('sort-by_content__item')} key={sortItem.id}>
                <Typography variant='span' fontSize={'var(--fs-lg)'}>{sortItem.name}</Typography>
                <IconButton className={cx('content-item_action')} size="small" >
                  <Clear fontSize="small"/>
                </IconButton>
              </li>
            ))
          }
        </ul>
      </Box>
      <Box>
        {STORE_SIDEBAR_ITEMS.map((category) => (
          <Box key={category.id} sx={{ margin:'1rem 0', borderBottom:'1px solid #e0e0e0' }}>
            <Typography variant="h6" fontWeight={700} marginBottom='1rem' color="primary" fontSize={'var(--fs-lg)'}>{category.display}</Typography>
            <ul>
              {category.content.map((categoryItemChild) => {
                const isSelectType = category.type === 'select'
                const isActive = isSelectType && categoryItemChild.id === filter.category
                const isChecked = !isSelectType && categoryItemChild.id === filter[category.name]

                return (
                  <li
                    key={categoryItemChild.id}
                    className={cx('category-item_child', { active: isActive })}
                    onClick={() => onChangeFilter(category.name, categoryItemChild.id)}
                  >
                    {isSelectType ? (
                      <>
                        <KeyboardDoubleArrowRight className={cx('category-item_child__icon')} />
                        <p className={cx('category-item_child__title', 'select')}>
                          {categoryItemChild.title}
                        </p>
                      </>
                    ) : (
                      <p className={cx('category-item_child__title')}>
                        <Checkbox size="small" checked={isChecked} />
                        {categoryItemChild.title}
                      </p>
                    )}
                  </li>
                )
              })}
            </ul>
          </Box>
        ))}
      </Box>
    </>
  )
}


export default Store