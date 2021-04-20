import * as actionTypes from './actionTypes'
import axios from 'axios'
import { BACKEND_URL } from '../utility'

export const placeOrderStart = () => {
    return {
        type: actionTypes.PLACE_ORDER_START
    }
}

export const placeOrderSuccess = message => {
    return {
        type: actionTypes.PLACE_ORDER_SUCCESS,
        message
    }
}

export const placeOrderFail = error => {
    return {
        type: actionTypes.PLACE_ORDER_FAIL,
        error
    }
}

export const placeOrder = order => {
    return dispatch => {
        dispatch(placeOrderStart());
        axios.post(BACKEND_URL + 'store/place_order/', {
            order: order
        })
        .then(res => {
            dispatch(placeOrderSuccess(res.data))
        })
        .catch(err => {
            dispatch(placeOrderFail(err))
        })
    }
}