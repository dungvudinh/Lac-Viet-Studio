import { useState } from 'react'
import { ArrowForwardIos, HelpOutline, Close, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import { Box, Divider, List, ListItem, Switch, Typography, DialogContent, Button, DialogActions, 
  Dialog, DialogTitle, IconButton, InputAdornment, TextField, Container } from '@mui/material'
import classNames from 'classnames/bind'
import { styled } from '@mui/material/styles'
import styles from './ProfileSetting.module.scss'
// import PasswordHint from "../../../components/PasswordHint";
const cx = classNames.bind(styles)

function ProfileSetting() {
  const [openVerifyPass, setOpenVerifyPass] = useState(false)
  const [isCorrectPass, setIsCorrectPass] = useState(false)

  return ( 
    <Container sx={{ flexGrow: 1, marginTop:'var(--nav-height)', minHeight:'calc(100vh - var(--nav-height))', paddingTop:'2rem' }} maxWidth='md'>
      <Box size={7} sx={{ bgcolor:'white.main', borderRadius:'0.3rem' }}>
        <Typography varient='h6' sx={{ fontSize:{ md:'var(--desc-fs-sm)', xs:'var(--desc-fs-xs)', padding:'1.2rem', fontWeight:700, marginBottom:0 } }}>
            Account Security    
        </Typography>
        <Divider /> 
        <div className={cx('profile-setting_content')} style={{ padding:'0 24px' }}>
          <List sx={{ width: '100%', bgcolor: 'background.paper', padding:0 }}>
            <ListItem secondaryAction={<ArrowForwardIos sx={{ fontSize:'1rem' }}/>} sx={{ padding:'1rem 0' }}>
              <Typography varient='h6' sx={{ fontSize:{ md:'var(--fs-md)', xs:'var(--fs-md)' }, flex:'0 0 15rem', margin:0 }}>
                  Change Password
              </Typography>
              {/* <PasswordHint numCharacter={5}/> */}
            </ListItem>
            <Divider />
            <ListItem sx={{ padding:'1.2rem 0' }} secondaryAction={
              <Switch edge="end" onChange={() => setOpenVerifyPass(true)} checked={isCorrectPass} size='small'/>}
            >
              <Typography varient='h6' sx={{ fontSize:{ md:'var(--fs-md)', xs:'var(--fs-md)' }, flex:{ md:'0 0 15rem', xs:'0 0 10rem' }, margin:0, display:'flex', alignItems:'center' }}>
                                      2-Step Verifcation 
                <HelpOutline sx={{ marginLeft:'5px', color:'iconFillColor', fontSize:'1rem' }}/>
              </Typography>
              <Typography varient='h6' sx={{ fontSize:{ md:'var(--fs-md)', xs:'var(--fs-md)' }, fontWeight:600 }}>
                                      Turned Off
              </Typography>
            </ListItem>
            <Divider />
            <ListItem secondaryAction={<ArrowForwardIos sx={{ fontSize:{ md:'17px', xs:'14px' } }}/>} sx={{ padding:'22px 0' }}>
              <Typography varient='h6' sx={{ fontSize:{ md:'var(--fs-md)', xs:'var(--fs-md)' }, flex:'0 0 15rem', margin:0 }}>
                                      Delete Account
              </Typography>
            </ListItem>
          </List>
        </div>
      </Box>
      <VerifyPasswordDialog open={openVerifyPass} onClose={() => setOpenVerifyPass(false)} setIsCorrectPass={setIsCorrectPass}/>
    </Container>
        
  )
}

const DialogCustom = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}))
const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: 'primary',
      borderWidth:'1px'
    }
  }
})
function VerifyPasswordDialog({ open, onClose, setIsCorrectPass })
{
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleMouseUpPassword = (event) => {
    event.preventDefault()
  }
  const handleAuthenPassword = () => {
    setIsCorrectPass(old => !old)
    onClose()
  }
  return (
    <DialogCustom
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth={false}
      maxWidth="sm"
      sx={{ 
        borderRadius: '1rem', 
        '& .MuiDialog-paper': { // Add this to set specific width
          width: '30rem'
        }
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, fontWeight:'700', fontSize:'var(--desc-fs-md)' }}>
          Xác thực mật khẩu
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500]
        })}
      >
        <Close />
      </IconButton>
      <DialogContent dividers >
        <Typography gutterBottom sx={{ fontSize:'var(--fs-md)' }}>
          {/* To protect your account security, please re-enter your password before continuing. */}
            Để bảo vệ an toàn tài khoản, vui lòng nhập lại mật khẩu trước khi tiếp tục.
        </Typography>
        <CssTextField id="outlined-size-small" size="small" type={showPassword ? 'text' :'password'} fullWidth={true}
          sx={{ marginTop:'1rem', '&.Mui-focused fieldset':{ borderColor:'primary' } }} 
          slotProps={{
            input:{
              // style: {
              //   fontSize: {md:'0.5rem !important', xs:'1.4rem'}
              // },
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
                  >
                    {showPassword ? <VisibilityOutlined fontSize='small' sx={{ width:'1rem', height:'1rem', color:'black.main' }}/> 
                      : <VisibilityOffOutlined fontSize='small' sx={{ width:'1rem', height:'1rem', color:'black.main' }}/>}
                  </IconButton>
                </InputAdornment>
            }
          }}
          
        />
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} variant='outlined' 
          sx={{ fontSize: { md:'var(--fs-md)', xs:'var(--fs-md)' }, textTransform: 'none', color:'black.main', borderColor:'rgb(170, 170, 170)' }} >
            Huỷ
        </Button>
        <Button autoFocus onClick={handleAuthenPassword} variant='contained' sx={{ fontSize: { md:'var(--fs-md)', xs:'var(--fs-md)' }, textTransform: 'none', color: '#fff' }} >
            Xác nhận
        </Button>
      </DialogActions>
    </DialogCustom>
  )
}
export default ProfileSetting