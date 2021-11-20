import axiosClient from "./AxiosClient";

export const AddFoodApi = (params)=> {
    const url = '/auth/local/register';
    return axiosClient.post(url, params);
}