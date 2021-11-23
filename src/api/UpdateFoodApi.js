import axiosClient from "./AxiosClient";

export const EditProfileApi = (params, id)=> {
    const url = '/auth/users/' + id;
    return axiosClient.put(url, params);
}