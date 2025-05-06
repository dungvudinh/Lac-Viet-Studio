import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGetAllProductAPI } from "~/admin/apis/productAPI";
export const fetchProducts= createAsyncThunk('product/fetchAll', async ()=>{
    const response = await fetchGetAllProductAPI()
    return response.data;
})