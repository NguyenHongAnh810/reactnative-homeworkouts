import axiosClient from "./AxiosClient";

export const UploadImageApi = (params)=> {
    const url = '/auth/local/register';
    return axiosClient.post(url, params);
}