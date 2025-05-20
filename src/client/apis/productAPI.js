import axiosClient from "~/shared/configs/axios"
export const fetchGetAllProductAPI = async (productCatalogSlug) => await axiosClient.get(`v1/${productCatalogSlug}/products`)