import axiosClient from "./AxiosClient";

export const AddFoodApi = (params)=> {
    const url = '/foods';
    return axiosClient.post(url, params);
}