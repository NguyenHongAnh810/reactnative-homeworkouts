import axiosClient from './AxiosClient';

export const GetListFoodApi = params => {
  console.log(" run GetListFoodApi", params )
  const url = '/foods';
  return axiosClient.get(url
    , {params:params}
  );
};
