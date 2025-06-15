import axiosClient from '~/configs/axios'
export const fetchGetAllProductAPI = async (productCatalogSlug) => await axiosClient.get(`v1/${productCatalogSlug}/products`)