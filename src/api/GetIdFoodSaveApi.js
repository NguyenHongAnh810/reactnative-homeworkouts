import axiosClient from './AxiosClient';

export const GetIdFoodSaveApi = params => {
  const url = '/food-svaes';
  return axiosClient.get(url
    , {params:params}
  );
};