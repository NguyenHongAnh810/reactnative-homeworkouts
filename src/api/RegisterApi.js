import axiosClient from "./AxiosClient";

export const RegisterApi = (params)=> {
    const url = '/auth/local/register';
    return axiosClient.post(url, params);
}
