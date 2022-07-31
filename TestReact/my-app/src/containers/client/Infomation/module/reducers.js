import { FETCH_INFO_USER_LOGIN } from "./types"

const initialState = {

    infoUserLogin : []
}

const QuanLyUserReducer =  (state = initialState, {type, payload}) => {
    switch (type) {

    case FETCH_INFO_USER_LOGIN : 
        state.infoUserLogin = payload
        return {...state}
    default:
        return state
    }
}

export default QuanLyUserReducer
