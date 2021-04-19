import * as actionTypes from './actionTypes';
import axios from 'axios';
import { BACKEND_URL } from '../utility';

export const fetchProductStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCT_START
    }
}

export const fetchProductSuccess = product => {
    return {
        type: actionTypes.FETCH_PRODUCT_SUCCESS,
        product
    }
}

export const fetchProductFail = error => {
    return {
        type: actionTypes.FETCH_PRODUCT_FAIL,
        error
    }
}

export const fetchProduct = () => {
    return dispatch => {
        dispatch(fetchProductStart());
        axios.get(BACKEND_URL + 'store/product/')
        .then(res => {
            dispatch(fetchProductSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchProductFail(err))
        })
    }
}