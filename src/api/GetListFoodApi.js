import axiosClient from './AxiosClient';

export const GetListFoodApi = (params, subParams = '') => {
  const url = `/foods` 
  + (subParams == '' ? '' : `?${subParams}`);
  return axiosClient.get(url, {params: params});
};
