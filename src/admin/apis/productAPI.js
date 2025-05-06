
import axiosClient from '~/shared/configs/axios'
export const fetchGetAllProductAPI = async () => await axiosClient.get('/v1/products')
export const fetchCreateProductAPI = async (data) => {
    return await axiosClient.post('/v1/products', data)
}