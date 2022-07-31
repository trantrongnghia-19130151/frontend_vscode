import {datVeApi} from "apis/datVeApi";
import { history } from 'App'
import Swal from "sweetalert2";
import {
    FETCH_ALL_SEAT_PLAN_REQUETS,
    FETCH_ALL_SEAT_PLAN_SUCCESS,
    FETCH_ALL_SEAT_PLAN_FAILD,
    DAT_GHE,
    DAT_VE
} from './types'


export const actDatghe = (ghe)=>{
    return dispatch =>{
        dispatch({
            type: DAT_GHE,
            payload:ghe
        })

    }
    
}
export const actDatVe = (thongTinDatVe) => {
    return dispatch =>{
        datVeApi
        .fetchDatVeApi(thongTinDatVe)
        .then(res => {
            dispatch({
                type: DAT_VE,
                payload: res.data.content
            })
            Swal.fire({
                title: "Đặt vé thành công",
                icon: "success",
                button: "OK",
            })
            .then(
                () => {
                    history.push("/")
                })
        })
        .catch(err =>{
            console.log(err)
        })
       
    }
}
export const actFetchAllSeatPlanApi = showTimeId => {
    return dispatch => {
        dispatch({ type: FETCH_ALL_SEAT_PLAN_REQUETS });
        datVeApi
            .fecthAllSeatPlanApi(showTimeId)
            .then(res => {
                dispatch({
                    type: FETCH_ALL_SEAT_PLAN_SUCCESS,
                    payload: res.data.content,
                });
            })
            .catch(err => {
                dispatch({
                    type: FETCH_ALL_SEAT_PLAN_FAILD,
                    payload: err,
                });
            });
    };
};