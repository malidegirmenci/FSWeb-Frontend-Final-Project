import {
    FETCH_SUCCESS,
    FETCH_LOADING,
    FETCH_ERROR,
} from "./actions";

const initial = {
    data: null,
    error: null,
    loading: true,
};

export default function myReducer(state = initial, action) {
    switch (action.type) {

        case FETCH_SUCCESS:
            return { ...state, loading: false, data: action.payload };

        case FETCH_LOADING:
            return { ...state, loading: true, error: null };

        case FETCH_ERROR:
            return { ...state, loading: false, error: action.payload };

        default:
            return { ...state, };
    }
}