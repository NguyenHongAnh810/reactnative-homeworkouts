import axiosClient from './AxiosClient';

export const GetIdSaveApi = params => {
  const url = '/food-svaes';
  return axiosClient.get(url
    , {params:params}
  );
};