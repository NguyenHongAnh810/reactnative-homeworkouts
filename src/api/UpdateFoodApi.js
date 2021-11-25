import axiosClient from "./AxiosClient";

export const UpdateFoodApi = (params, id)=> {
    const url = '/foods/' + id;
    return axiosClient.put(url, params);
}