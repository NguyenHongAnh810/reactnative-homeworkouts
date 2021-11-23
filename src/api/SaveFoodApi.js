import axiosClient from "./AxiosClient";

export const SaveFoodApi = (params)=> {
    const url = '/food-svaes';
    return axiosClient.post(url, params);
}