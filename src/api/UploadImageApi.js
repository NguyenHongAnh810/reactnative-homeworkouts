import axios from "axios";
import { BASE_URL } from "./Common";

export const UploadImageApi = (imageData)=> {
    const url = '/upload';
    return axios.post(url, imageData, {
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'mutipart/form-data'
        }
    });
}