import axiosClient from "../AxiosClient";

export const getSuggestUser = (params)=> {
    const url = '/users';
    return axiosClient.get(url, params);
}