import axios from 'axios';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    products: null,
    error: null,
    loading: false
}

const fetchProductsStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const fetchProductsSuccess = (state, action) => {
    return updateObject(state, {
        products: action.products,
        error: null,
        loading: false
    })
}

const fetchProductsFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const fetchProductsReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_PRODUCTS_START: return fetchProductsStart(state, action);
        case actionTypes.FETCH_PRODUCTS_SUCCESS: return fetchProductsSuccess(state, action);
        case actionTypes.FETCH_PRODUCTS_FAIL: return fetchProductsFail(state, action);
        default:
            return state;
    }
}

export default fetchProductsReducer;