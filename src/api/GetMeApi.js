import axiosClient from './AxiosClient';

export const GetMeApi = params => {
  const url = '/users';
  return axiosClient.get(url
    , {params:params}
  );
};

export const UpdateUserApi = (formData, id)=> {
  const url = '/users/' + id;
  return axiosClient.put(url, formData);
}

