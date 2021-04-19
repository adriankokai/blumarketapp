import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    product: null,
    error: null,
    loading: false
}

const fetchProductStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const fetchProductSuccess = (state, action) => {
    return updateObject(state, {
        product: action.product,
        error: null,
        loading: false
    })
}

const fetchProductFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const fetchProductReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_PRODUCT_START: return fetchProductStart(state, action);
        case actionTypes.FETCH_PRODUCT_SUCCESS: return fetchProductSuccess(state, action);
        case actionTypes.FETCH_PRODUCT_FAIL: return fetchProductFail(state, action);
        default:
            return state
    }
}

export default fetchProductReducer;