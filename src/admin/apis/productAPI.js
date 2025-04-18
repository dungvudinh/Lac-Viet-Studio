
import { API_ROOT } from '~/shared/utils/constants'
import axiosClient from '~/shared/configs/axios'
export const fetchGetAllProductAPI = async () => await axiosClient.get('/v1/products')
export const fetchCreateProductAPI = async (data) => {
    console.log(data)
    return await axiosClient.post('/v1/products', data)
}