import axios from 'axios';
import * as actionTypes from './actionTypes';
import { BACKEND_URL } from '../utility';


export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START
    }
}

export const fetchProductsSuccess = products => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products
    }
}

export const fetchProductsFail = error => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error
    }
}

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsStart());
        axios.get(BACKEND_URL + 'store/products/')
        .then(res => {
            dispatch(fetchProductsSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchProductsFail(err))
        })
    }
}