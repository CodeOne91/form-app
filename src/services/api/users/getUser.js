import {axiosInstance} from "../apiService";
import {USER_PATH} from "../../../constants/api/api";


const getUser = async ()=>{
    const response = await axiosInstance.get(USER_PATH).catch((err)=>{
        console.log('GET USER ERROR: ' + err)
        throw err;
    })
    return response
}

export default getUser
