import axiosClient from "./AxiosClient";

export const DeleteFoodSaveApi = (params, id)=> {
    const url = '/food-svaes/' + id;
    return axiosClient.delete(url, params);
}