import { createSlice } from '@reduxjs/toolkit'
import createAsyncReducer from '~/redux/utils/createAsyncReducer'
import { fetchProducts } from '../thunks/productThunk';

const productSlice = createSlice({
  name: 'product', 
  initialState:{
    product:{},
    products:[],
    loading: false,
    error: null
  }, 
  reducers:{
    setProduct:(state, action)=>{
      state.product = action.payload
    }, 
    resetProductState: (state) => {
      state.catalogs = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers:(builder) => {
    createAsyncReducer(builder, fetchProducts, 'products')
  },
  
})
export const {setProduct, resetProductState} = productSlice.actions
export default productSlice.reducer