import { axiosInstance } from "../apiService";
import { USER_PATH } from "../../../constants/api/api";
import { setUser } from "../../../store/reducers/userSlice";

const getUser = async (id, dispatch) => {
  const response = await axiosInstance.get(USER_PATH + id).catch((err) => {
    dispatch(setUser(null));

    throw err;
  });
  dispatch(setUser(response.data));
  return response;
};

export default getUser;
