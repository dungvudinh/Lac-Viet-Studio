import { configureStore } from '@reduxjs/toolkit'

import loadingReducer from './features/slices/loadingSlice'
import alertReducer from './features/slices/alertSlice'
import backdropReducer from './features/slices/backdropSlice'
import productReducer from './features/slices/productSlice'
const store = configureStore({
  reducer:{
    product: productReducer,
    loading:loadingReducer,
    alert:alertReducer,
    backdrop:backdropReducer
  }
})
export default store