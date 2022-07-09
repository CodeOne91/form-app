import axios from "axios";
import {BASE_URL} from "../../constants/api/api";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const baseHeaders = {
    Accept: 'application/json'
}

export const axiosInstance = axios.create({
    headers: baseHeaders,
    baseURL: BASE_URL,
})

axiosInstance.interceptors.request.use(
    (request) => {
        if (request.method === 'POST' || request.method === 'post') {
            request.headers.Authorization = `Bearer ${process.env.REACT_APP_GOREST_AUTHORIZATION_TOKEN}`;
            return request
        }
        return request
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        switch (response.status) {
            case 200:
                toast.success('Success')
                break
            case 201:
                toast.success('User creation success')
                break

        }
        return response
    },
    (err) => {
        switch (err.response.status) {
            case 400:
                toast.error('Bad request')
                throw ('Bad request :' + err.message)
                break
            case 401:
                toast.error('Not authorized')
                throw ('Not Authorized :' + err.message)
                break
            case 422:
                toast.error(' Data validation failed')
                throw (' Data validation failed :' + err.message)
                break
            default:
                console.log('Generic failed')

        }

    }
)
