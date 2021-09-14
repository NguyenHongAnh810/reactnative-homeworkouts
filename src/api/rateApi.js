import axiosClient from './axiosClient';

const rateApi = {
  getAll: params => {
    const url = '/d216bd5e-f1fb-478f-a693-78652fa82d87';
    return axiosClient.get(url, {params});
  },
};

export default rateApi;
