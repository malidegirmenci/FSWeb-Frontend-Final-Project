import axios from "axios";
import {data} from "../data/Data";

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchLoading = () => {
    return { type: FETCH_LOADING }
}
export const fetchError = (message) => {
    return { type: FETCH_ERROR, payload: message }
}
export const fetchSuccess = (data) => {
    return { type: FETCH_SUCCESS, payload: data }
}

export const fetchAnother = () => (dispatch) => {
    console.log("fetchAnother started");
    dispatch(fetchLoading());
    axios
        .post("https://reqres.in/api/users",data)
        .then((response) => {
            console.log("response:", response)
            setTimeout(()=>{
                dispatch(fetchSuccess(response.data));
            },700)
        })
        .catch((error) => {
            console.log(error);
            dispatch(fetchError(error));
        })
}