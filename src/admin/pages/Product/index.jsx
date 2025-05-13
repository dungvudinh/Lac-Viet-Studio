import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './Product.module.scss'
import classNames from "classnames/bind";
import { Box, Stack,Button,TextField, Typography,ButtonGroup, Dialog, DialogTitle, DialogContent,DialogActions, Grid2 as Grid, IconButton } from "@mui/material";
import { Add,ModeEditOutline, DeleteOutline, Clear, CloudUpload } from "@mui/icons-material";
import Navigation from "~/admin/components/Navigation";
import CustomTable from "~/admin/components/CustomTable";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "~/redux/features/shared/slices/loadingSlice";
import confirmAlert from "~/shared/utils/confirmAlert";
import { fetchProducts } from "~/redux/features/admin/thunks/productThunk";
import { resetProductState, setProduct } from "~/redux/features/admin/slices/productSlice";
import { useAlert } from "~/shared/utils/alert";
import { fetchCreateProductAPI, fetchDeleteProductAPI, fetchUpdateProductAPI } from "~/admin/apis/productAPI";

const cx = classNames.bind(styles)
function Product()
{
    const dispatch = useDispatch()
    const {catalogSlug} = useParams()
    const alert = useAlert()
    const {products} = useSelector(state=>state.adminProduct)
    const [openCreateNew, setOpenCreateNew] = useState(false)
    useEffect(() =>
    {
        dispatch(setLoading(true))
        dispatch(fetchProducts(catalogSlug))
        dispatch(setLoading(false))
        return ()=> dispatch(resetProductState()) // clear data when unmounting
      }, [])
    const handleDelete = async (_id)=>
    {
        const isConfirmed = await confirmAlert();
        if(isConfirmed)
        {
          dispatch(setLoading(true))
          try 
          {
            const res = await fetchDeleteProductAPI(_id)          
            alert('success', res.data.msg)
            dispatch(fetchProducts())
            dispatch(setLoading(false))
          }
          catch(error)
          {
            dispatch(setLoading(false));
            if (error.response && error.response.data && error.response.data.msg) {
              alert('error', error.response.data.msg)
            } else {
              alert('error', 'Có lỗi xảy ra, vui lòng thử lại')
            }
          }
        }
    }
    const handleUpdate = async (data)=>
    {
      dispatch(setProduct(data))
      setOpenCreateNew(true)
    }
    const handleCreateNew = async ()=>
    {
      setOpenCreateNew(true)
      dispatch(setProduct({}))
    }
    const columns = [
        {
          accessorKey: 'name',
          header: 'Tên Sản Phẩm',
          cell: info => info.getValue(),
        },
        {
        accessorKey: 'image',
        header: 'Hình Ảnh',
        cell: info => info.getValue(),
        },
        {
        accessorKey: 'listedPrice',
        header: 'Giá Niêm Yết',
        cell: info => info.getValue(),
        },
        {
        accessorKey: 'sellingPrice',
        header: 'Giá Bán',
        cell: info => info.getValue(),
        },
        {
          header:()=><Typography fontWeight={600}>Thao Tác</Typography>, 
          id:'action',
          classNames:'d-flex justify-content-start',
          cell:({row})=>(
            <div>
              <ButtonGroup variant='contained'>
                <Button  size='small' sx={{backgroundColor:'#1976d2'}} onClick={()=>handleUpdate(row.original)}>
                  <ModeEditOutline fontSize='small'/>
                </Button>
                <Button  size='small' sx={{backgroundColor:'#d32f2f'}} onClick={()=>handleDelete(row.original._id)}>
                  <DeleteOutline fontSize='small'/>
                </Button>
              </ButtonGroup>
              
          </div>
          )
        }
    ]
    return (
        <Box>
            <Navigation />
            <Box sx={{ padding:'1rem', backgroundColor:'var(--text-white)', borderRadius:'0.5rem',
                display:'flex', justifyContent:'space-between', alignItems:'center', direction:'row' }}>
                <Stack direction={'row'} sx={{ minWidth:'20rem' }} justifyContent={'space-between'} alignItems={'center'}>
                    <TextField variant='standard' label="Tìm kiếm" sx={{ flex:1, marginRight:'1rem' }}/>
                    <Button variant='contained' size='small'>Tìm kiếm</Button>
                </Stack>
                <Button variant="contained" size="small" onClick={handleCreateNew}>
                    <Add fontSize="small"/>
                    Thêm Mới
                </Button>
            </Box>
            <CustomTable  data={products} columns={columns}/>
            <CreateNew open={openCreateNew} onClose={()=>setOpenCreateNew(false)}/>
        </Box>
    )
}
const CreateNew = ({open, onClose})=>
{
  const dispatch = useDispatch()
  const alert = useAlert()
  const {catalogSlug} = useParams();
  const [product, setProduct] = useState({
    name: '',
    images: [],
    listedPrice: '',
    sellingPrice: '',
    age: ''
  })
  const [imageSlots, setImageSlots] = useState([
    { id: 1, image: null, preview: null }
  ]);
  const [errorMessages, setErrorMessages] = useState({
    name: '', 
    listedPrice:'', 
    sellingPrice:'',
    age: '', 
    images: ''
  })
  useEffect(() => {
    return () => {
      imageSlots.forEach(slot => {
        if (slot.preview) {
          URL.revokeObjectURL(slot.preview);
        }
      });
    };
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setErrorMessages({...errorMessages, [name]:''})
    setProduct(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSlotImageChange = (slotId, file) => {
    if (file) {
      const preview = URL.createObjectURL(file);
      const updatedSlots = imageSlots.map(slot => 
        slot.id === slotId 
          ? { ...slot, image: file, preview } 
          : slot
      );
      setProduct({...product, images: updatedSlots.map(slot=>slot.image)})
      setImageSlots([...updatedSlots, {id:imageSlots.length +1, image: null, preview:null}])

    }
  };

  const handleRemoveSlotImage = (slotId) => {
    setImageSlots(prev => {
      // Remove the image from the slot
      const updatedSlots = prev.map(slot => {
        if (slot.id === slotId) {
          if (slot.preview) {
            URL.revokeObjectURL(slot.preview);
          }
          return { ...slot, image: null, preview: null };
        }
        return slot;
      });

      // Filter out empty slots except the last one
      const filledSlots = updatedSlots.filter(slot => slot.image || slot.preview);
      const emptySlots = updatedSlots.filter(slot => !slot.image && !slot.preview);
      
      // If there are multiple empty slots, keep only one at the end
      if (emptySlots.length > 1) {
        return [...filledSlots, emptySlots[0]];
      }
      return updatedSlots;
    });
  };
  const validateData = (e) =>
  {
    const fieldName = e.target.name; 
    const value = e.target.value;
    var errorMessage = ''
    if(!value)
    {
      if(fieldName === 'name')
        errorMessage = 'Vui lòng nhập tên sản phẩm'
      else if(fieldName === 'listedPrice')
        errorMessage = 'Vui lòng nhập giá niêm yết'
      else if(fieldName === 'sellingPrice')
        errorMessage = 'Vui lòng nhập giá bán'
      else if(fieldName === 'age')
        errorMessage = 'Vui lòng nhập độ tuổi'
      else 
        errorMessage = 'Vui lòng nhập hình ảnh'
      setErrorMessages({...errorMessages, [fieldName]: errorMessage})
      return;
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try 
    {
      dispatch(setLoading(true))
      const formData = new FormData()
      formData.append('name', product.name)
      formData.append('listedPrice', product.listedPrice)
      formData.append('sellingPrice', product.sellingPrice)
      formData.append('age', product.age)
      formData.append('catalogSlug', catalogSlug)
      Array.from(product.images).forEach(image=>{
        formData.append('images', image)
      })
      const response = await fetchCreateProductAPI(catalogSlug, formData)
      alert('success', response.data.msg)
      dispatch(fetchProducts(catalogSlug))
      dispatch(setLoading(false))
      onClose()
    }
    catch (error)
    {
      dispatch(setLoading(false));
      if (error.response && error.response.data && error.response.data.msg) {
        alert('error', error.response.data.msg)
      } else {
        alert('error', 'Có lỗi xảy ra, vui lòng thử lại')
      }
    }
  }

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Thêm Sản Phẩm Mới</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          {/* Product Details Section */}
          <div className={cx('form-section')}>
            <Typography variant="subtitle1" gutterBottom>Thông tin sản phẩm</Typography>
            <Grid container spacing={2} direction={'column'}>
              <Grid item>
                <TextField
                  fullWidth
                  label="Tên sản phẩm"
                  name="name"
                  value={product.name}
                  onChange={handleInputChange}
                  onBlur={validateData}
                  error={errorMessages.name !== ''}
                  helperText={errorMessages.name}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Giá niêm yết"
                  name="listedPrice"
                  type="number"
                  value={product.listedPrice}
                  onChange={handleInputChange}
                  onBlur={validateData}
                  error={errorMessages.listedPrice !== ''}
                  helperText={errorMessages.listedPrice}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Giá bán"
                  name="sellingPrice"
                  type="number"
                  value={product.sellingPrice}
                  onChange={handleInputChange}
                  onBlur={validateData}
                  error={errorMessages.sellingPrice !== ''}
                  helperText={errorMessages.sellingPrice}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label="Độ tuổi"
                  type="number"
                  name="age"
                  value={product.age}
                  onChange={handleInputChange}
                  onBlur={validateData}
                  error={errorMessages.age !== ''}
                  helperText={errorMessages.age}
                />
              </Grid>
            </Grid>
          </div>

          {/* Image Slots Section */}
          <div className={cx('form-section')}>
            <Typography variant="subtitle1" gutterBottom>Hình ảnh sản phẩm</Typography>
            <Grid container spacing={2}>
              {imageSlots.map((slot, index) => (
                <Grid item xs={3} key={slot.id}>
                  <Box 
                    className={cx('image-slot')}
                    sx={{ 
                      position: 'relative',
                      aspectRatio: '1',
                      border: '2px dashed #D32F2F',
                      borderRadius: '4px',
                      overflow: 'hidden', 
                      width:'100px',
                      height:'100px'
                    }}
                  >
                    {slot.preview ? (
                      <>
                        <img 
                          src={slot.preview} 
                          alt={`Slot ${slot.id}`}
                          style={{ 
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                            
                          }}
                        />
                        <Button
                          size="small"
                          color="error"
                          onClick={() => handleRemoveSlotImage(slot.id)}
                          sx={{
                            position: 'absolute',
                            top: 4,
                            right: 4,
                            minWidth: 'auto',
                            padding: '4px',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            '&:hover': {
                              backgroundColor: '#ffebee'
                            }
                          }}
                        >
                          <DeleteOutline fontSize="small" />
                        </Button>
                      </>
                    ) : (
                      <Button
                        component="label"
                        sx={{
                          width: '100%',
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'text.secondary',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)'
                          }
                        }}
                      >
                        <Add fontSize="large" sx={{color:'#D32F2F'}}/>
                        <Typography variant="caption" color="red">Thêm ảnh</Typography>
                        <input
                          type="file"
                          accept="image/*"
                          name="images"
                          onChange={(e) => handleSlotImageChange(slot.id, e.target.files[0])}
                          hidden
                        />
                      </Button>
                    )}
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Typography color="red" fontSize={'var(--fs-sm)'} sx={{margin:'3px 14px 0'}}> Vui lòng thêm hình ảnh sản phẩm </Typography>
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">Hủy</Button>
        <Button variant="contained" onClick={handleSubmit}>Lưu</Button>
      </DialogActions>
    </Dialog>
  )
}
export default Product;