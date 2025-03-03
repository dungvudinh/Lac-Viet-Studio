import { createTheme, darken } from '@mui/material/styles'
import './_breakpoint.scss'
const lacviet = createTheme({
  palette:{
    primary:{
      main:'#f77919'
    }, 
    secondary:{
      main:'#fde6d4'
    }, 
    lineColor:{
      main:'#eee'
    }, 
    textColorLight: '#6a6a6a', 
    black:{
      main:'#111'
    },
    white:{
      main:'#FFF'
    } 

  },
  typography:{
    fontFamily:'Manrope, sans-serif'
    // fontSm:{
    //   fontSize:12
    // }, 
    // fontMd:{
    //   fontSize:14
    // }, 
    // fontExMd:{
    //   fontSize:16
    // },
    // fontLg:{
    //   fontSize:18
    // }
    
  },
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          fontSize:'var(--fs-md)',
          textTransform: 'none',
          color:'#FFF'
          
        }
      }
    }, 
    MuiInputBase:{
      styleOverrides:{
        root:{
          fontSize:'var(--fs-md)'
        }
      }
    },

    MuiMenuItem:{
      styleOverrides:{
        root:{
          fontSize:'var(--fs-md)'
        }
      }
    },
    MuiFormLabel:{
      styleOverrides:{
        root:{
          fontSize:'var(--fs-md)'
        }
      }
    }
      
    
  }
})

export default lacviet


