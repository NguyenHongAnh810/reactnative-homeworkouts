import axiosClient from './AxiosClient';

export const GetIdFoodSaveApi = params => {
  console.log(" run getidFoodSaveApi", params )
  const url = '/food-svaes';
  return axiosClient.get(url
    , {params:params}
  );
};