import { axiosInstance } from "../apiService";
import { USER_PATH } from "../../../constants/api/api";

const postUser = async (data) => {
  const response = await axiosInstance.post(USER_PATH, data).catch((err) => {
    throw err;
  });
  return response;
};

export default postUser;
