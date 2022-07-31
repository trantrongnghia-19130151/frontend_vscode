
import { userApi } from "apis/userApi"
import { FETCH_INFO_USER_LOGIN} from "./types"



export const actFetchInFoUserLogin = () => {
    return  dispatch => {
        userApi
        .fetchInfoUserLogin()
        .then(res =>{
            dispatch({
                type: FETCH_INFO_USER_LOGIN,
                payload: res.data.content,
            })
        })
        .catch(err => {
            console.log('err', err)
        })
       
    }
}

