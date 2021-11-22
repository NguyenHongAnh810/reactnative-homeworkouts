import axiosClient from './AxiosClient';

export const GetMeApi = params => {
  console.log(" run getUserApi", params )
  const url = '/users';
  return axiosClient.get(url
    , {params:params}
  );
};