import {axiosInstance} from "../apiService";
import {USER_PATH} from "../../../constants/api/api";
import {setUser} from "../../../store/reducers/userSlice";


const getUser = async (dispatch)=>{
    const response = await axiosInstance.get(USER_PATH).catch((err)=>{
        console.log('GET USER ERROR: ' + err)
        throw err;
    })
    dispatch(setUser(response.data))
    return response
}

export default getUser
