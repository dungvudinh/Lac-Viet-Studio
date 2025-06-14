import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpenAlert:false,
  status:'',
  message:''
}

const alertSlice = createSlice({
  name: 'alert', 
  initialState, 
  reducers:{
    setToggleAlert: (state, action) => {
      state.isOpenAlert = action.payload
    },
    setAlertStatus: (state, action) => {
      state.status = action.payload
    },
    setAlertMessage: (state, action) => {
      state.message = action.payload
    }
  }
})

export const { setToggleAlert, setAlertMessage, setAlertStatus } = alertSlice.actions
export default alertSlice.reducer