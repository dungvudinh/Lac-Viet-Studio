import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/admin/slices/productSlice'
import productCatalogReducer from './features/admin/slices/productCatalogSlice'
import loadingReducer from './features/shared/slices/loadingSlice'
import alertReducer from './features/shared/slices/alertSlice'
const store = configureStore({
  reducer:{
    //admin
    adminProduct: productReducer,
    adminProductCatalog: productCatalogReducer,
    //client
    //shared
    sharedLoading:loadingReducer,
    sharedAlert:alertReducer
  }
})
export default store