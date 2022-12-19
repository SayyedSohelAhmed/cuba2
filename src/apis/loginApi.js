
import axios from "axios"
import {POST_URL} from "../constant"
import {POST_URL_END_POINT} from "../constant"
export const fetchLoginApi= async (email,password)=>{
    return await axios.post(`${POST_URL}/${POST_URL_END_POINT}`,email,password)
    
}
