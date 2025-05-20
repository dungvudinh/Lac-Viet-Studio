import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchGetAllProductAPI } from '~/client/apis/productAPI'
export const fetchProducts= createAsyncThunk('product/fetchAll', async (productCatalogSlug) => {
  const response = await fetchGetAllProductAPI(productCatalogSlug)
  return response.data
})