import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/admin/slices/productSlice'
import productCatalogReducer from './features/admin/slices/productCatalogSlice'
import loadingReducer from './features/shared/slices/loadingSlice'
import alertReducer from './features/shared/slices/alertSlice'
import backdropReducer from './features/shared/slices/backdropSlice'
import clientProductReducer from './features/client/slices/productSlice'
const store = configureStore({
  reducer:{
    //admin
    adminProduct: productReducer,
    adminProductCatalog: productCatalogReducer,
    //client
    clientProduct: clientProductReducer,
    //shared
    sharedLoading:loadingReducer,
    sharedAlert:alertReducer,
    sharedBackdrop:backdropReducer
  }
})
export default store