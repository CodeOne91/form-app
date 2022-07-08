import axios from "axios";
import {BASE_URL} from "../../constants/api/api";

const baseHeaders = {
    Accept: 'application/json'
}

export const axiosInstance = axios.create({
    headers: baseHeaders,
    baseURL: BASE_URL,
})

axiosInstance.interceptors.request.use(
    (request)=>{
        if(request.method === 'POST' || request.method === 'post'){
            request.headers.Authorization = `Bearer ${process.env.REACT_APP_GOREST_AUTHORIZATION_TOKEN}`;
            return request
        }
        return request
    }

)

axiosInstance.interceptors.response.use(
    (response)=> response,
    ()=> Promise.reject()



)
