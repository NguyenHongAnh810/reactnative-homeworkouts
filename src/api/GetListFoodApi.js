import axiosClient from './AxiosClient';

export const GetListFoodApi = (params, subParams = '') => {
  console.log(' run GetListFoodApi', params);
  const url = `/foods` 
  + (subParams == '' ? '' : `?${subParams}`);
  return axiosClient.get(url, {params: params});
};
