import axiosClient from "./AxiosClient";

export const DeleteFoodApi = (params, id)=> {
    const url = '/foods/' + id;
    return axiosClient.delete(url);
}