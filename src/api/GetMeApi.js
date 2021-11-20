import axiosClient from './AxiosClient';

export const GetMeApi = params => {
  console.log(" run getUserApi", params )
  const url = '/user';
  return axiosClient.get(url
    , {params:params}
  );
};