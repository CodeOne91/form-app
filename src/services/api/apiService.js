import axios from "axios";
import { BASE_URL } from "../../constants/api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { t } from "i18next";

const baseHeaders = {
  Accept: "application/json",
};

export const axiosInstance = axios.create({
  headers: baseHeaders,
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use((request) => {
  if (request.method === "POST" || request.method === "post") {
    // eslint-disable-next-line no-undef
    request.headers.Authorization = `Bearer ${process.env.REACT_APP_GOREST_AUTHORIZATION_TOKEN}`;
    return request;
  }
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    switch (response.status) {
      case 200:
        toast.success(t("message.success"));
        break;
      case 201:
        toast.success(t("message.creation-success"));

        break;
    }
    return response;
  },
  (err) => {
    switch (err.response.status) {
      case 400:
        toast.error(t("message.bad-request"));
        throw "Bad request :" + err.message;
      case 401:
        toast.error(t("message.not-authorized"));
        throw "Not Authorized :" + err.message;
      case 422:
        toast.error(t("message.validation-failed"));
        throw " Data validation failed :" + err.message;
      default:
        toast.error(t("message.generic-error"));
        throw " Generic error :" + err.message;
    }
  }
);
