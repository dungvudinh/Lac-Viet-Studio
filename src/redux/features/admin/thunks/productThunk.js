import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGetAllProductAPI } from "~/admin/apis/productAPI";
export const fetchProducts= createAsyncThunk('product/fetchAll', async (productCatalogSlug)=>{
    const response = await fetchGetAllProductAPI(productCatalogSlug)
    console.log(response)
    return response.data;
})