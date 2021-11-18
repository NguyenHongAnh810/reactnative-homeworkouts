
import axiosClient from "./AxiosClient";

export const LoginApi = (params)=> {    
    const url = '/auth/local';
    return axiosClient.post(url, params);
}
