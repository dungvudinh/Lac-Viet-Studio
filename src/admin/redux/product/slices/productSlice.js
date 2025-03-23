import { createSlice } from '@reduxjs/toolkit'
import createAsyncReducer from '~/admin/redux/utils/createAsyncReducer'
import { fetchProducts } from '../thunks/productThunks'

const productSlice = createSlice({
  name: 'product', 
  initialState:{
    product:{},
    products:[],
    loading: false,
    error: null
  }, 
  reducers:{},
  extraReducers:(builder) => {
    createAsyncReducer(builder, fetchProducts, 'products')
  }
})

export default productSlice.reducer