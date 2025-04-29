import {useState} from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Dialog, DialogTitle, DialogContent, IconButton, Typography, TextField, Box, InputAdornment, Checkbox, Link} from '@mui/material';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { FacebookIcon, GoogleIcon } from '~/client/assets/Icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setLoading } from '~/shared/redux/loadingSlice'
import { setOpenAlert,setAlertMessage,setAlertStatus} from '~/shared/redux/alertSlice';
import { login } from '~/shared/apis/userAPI';
import validator from 'validator'

const cx = classNames.bind(styles);
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
function Login({isLoginDialogOpen, onCloseLoginDialog}) {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [account,setAccount] = useState({
        email:'',
        password:''
    })
    const [message, setMessage] = useState({
        email:'',
        password:''
    })
    const [validateAccount, setValidateAccount]= useState({
        isValidateEmail:false, 
        isValidatePassword:false
    })
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    const handleLogin = async ()=>
    {
        dispatch(setLoading(true))
        try 
        {
            await login(account.email, account.password)
            dispatch(setOpenAlert(true))
            dispatch(setAlertStatus('success'))
            dispatch(setAlertMessage('Đăng nhập thành công'))
            dispatch(setLoading(false))
            onCloseLoginDialog()
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        }
        catch(error)
        {
            console.log(error)
            setMessage(error)
            
        }
    }
    const handleValidateAccount = ()=>
    {
        if(account.email != '')
        {
            if(!validator.isEmail(account.email))
            {
                setValidateAccount({...validateAccount, isValidateEmail:true})
                setMessage({...message, email: 'Email không hợp lệ'})
            }
            else 
                setValidateAccount({...validateAccount, isValidateEmail:false})
        }
        else 
        {
            setValidateAccount({...validateAccount, isValidateEmail:true})
            setMessage({...message, email:'Email is required'})
        }
        if(account.password == '')
        {
            setValidateAccount({...validateAccount, isValidatePassword:true})
            setMessage({...message, password:'Password is required'})
        }
    }
    return ( 
            <BootstrapDialog
                onClose={onCloseLoginDialog}
                aria-labelledby="customized-dialog-title"
                open={isLoginDialogOpen}
                fullWidth={false}
                maxWidth="sm"
                sx={{ 
                    borderRadius: '20px', 
                    color: 'black',
                    '& .MuiDialog-paper': {  // Add this to set specific width
                        width: '500px'
                    }
                }}
            >
                <DialogTitle sx={{ m: 0, p: 2, fontSize:'var(--desc-fs-sm)', textAlign:'center', fontWeight:'700' }} id="customized-dialog-title">
                    Tài Khoản Lạc Việt Studio
                </DialogTitle>
                <DialogContent dividers sx={{display:'flex', justifyContent:'center'}}>
                    <Box sx={{ width: 300, margin: '30px auto' }}>
                        <Typography variant="h4" gutterBottom sx={{fontWeight: 500, textAlign:'center', fontSize:{md:'var(--title-fs-sm)'}}}>
                            Đăng Nhập
                        </Typography>
                        <Box component="form" sx={{width: '100%'}}>
                            <TextField  
                                margin="normal"
                                required
                                fullWidth
                                size="small"
                                variant="standard"
                                error={validateAccount.isValidateEmail}
                                helperText={validateAccount.isValidateEmail  ? message.email : ''}
                                onChange={(e) => setAccount({...account, email:e.target.value})}
                                onBlur={handleValidateAccount}
                                placeholder='Địa chỉ Email*'
                                sx={{'& input':{fontSize:'var(--desc-fs-xs)'}}}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                size="small"
                                variant="standard"
                                error={validateAccount.isValidatePassword}
                                helperText={validateAccount.isValidatePassword ? message.password : ''}
                                onChange={(e) => setAccount({...account,password:e.target.value})}
                                onBlur={handleValidateAccount}
                                placeholder='Mật khẩu*'
                                type={showPassword ? 'text' :'password'}
                                sx={{'& input':{fontSize:'var(--desc-fs-xs)'}}}
                                slotProps={{
                                    input:{
                                        endAdornment:
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}   
                                            edge="end"
                                            sx={{marginRight: '2px'}}
                                            >
                                                {showPassword ? <VisibilityOutlined fontSize='small'  sx={{width:15, height:15, color:'#111'}}/> 
                                                : <VisibilityOffOutlined fontSize='small' sx={{width:15, height:15, color:'#111'}}/>}
                                            </IconButton>
                                      </InputAdornment>
                                    }
                                  }}
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, color: '#fff', textTransform: 'none', fontSize: 'var(--fs-md)', fontWeight:600 }}
                                onClick={handleLogin}
                            >
                                Đăng Nhập
                            </Button>
                        </Box>
                       {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box sx={{ flex: 1, height: '1px', bgcolor: '#ccc' }} />
                          <span style={{ color: '#666' }}>hoặc</span>
                          <Box sx={{ flex: 1, height: '1px', bgcolor: '#ccc' }} />
                       </Box> */}
                       {/* <Button
                          fullWidth
                          variant="outlined"
                          sx={{ 
                            mt: 2,
                            textTransform: 'none',
                            fontSize: 'var(--fs-md)',
                            fontWeight: 600,
                            borderColor: '#f77919',
                            color: '#f77919',
                            '&:hover': {
                              borderColor: '#f77919',
                              bgcolor: 'rgba(247, 121, 25, 0.04)'
                            }
                          }}
                          onClick={handleLogin}
                       >
                          Đăng nhập với tư cách Admin
                       </Button> */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 1, marginTop:2 }}>
                            <Typography sx={{ fontSize: 'var(--fs-md)', color: '#f77919', cursor: 'pointer' }}>
                               Tạo tài khoản
                            </Typography>
                            <Typography sx={{ fontSize: 'var(--fs-md)', color: '#f77919', cursor: 'pointer' }}>
                                Quên mật khẩu?
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                            <Checkbox size="small" />
                            <Typography sx={{ fontSize: 'var(--fs-sm)' }}>
                                Tôi đồng ý với <span style={{color: '#f77919'}}>Điều khoản sử dụng</span> và <span style={{color: '#f77919'}}> Chính sách bảo mật</span>
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1 }}>
                            <Typography sx={{ fontSize: 'var(--fs-lg)', color: 'rgb(137, 137, 137)', mb: 1 }} className={cx('login-other_text')}>
                                Đăng nhập với tài khoản khác
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, mt:2 }}>
                                <IconButton sx={{ p: 1 }} size='small'>
                                    <GoogleIcon width={30} height={30}/>
                                </IconButton>
                                <IconButton sx={{ p: 1 }} size="small">
                                    <FacebookIcon width={35} height={35}/>
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </DialogContent>
            </BootstrapDialog>
     );
}

export default Login;