import axiosClient from './AxiosClient';

export const GetMeApi = params => {
  const url = '/users';
  return axiosClient.get(url
    , {params:params}
  );
};