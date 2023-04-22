import axiosClient from "./AxiosClient";

export const CreateRateApi = (params)=> {
    const url = '/evaluates'
    return axiosClient.post(url, params);
}

export const getListRateApi = (params)=> {
    const url = `/evaluates`
    return axiosClient.get(url,{params: params});
}

export const UpdateRateApi = (params, id)=> {
    const url = '/evaluates/' + id;
    return axiosClient.put(url, params);
}

export const DeleteRateApi = (params, id)=> {
    const url = '/evaluates/' + id;
    return axiosClient.delete(url, {params: params});
}
