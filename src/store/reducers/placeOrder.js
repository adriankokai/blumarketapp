import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
    message: null,
    error: null,
    loading: false
}

const placeOrderStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const placeOrderSuccess = (state, action) => {
    return updateObject(state, {
        message: action.message,
        error: null,
        loading: false
    })
}

const placeOrderFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const placeOrderReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.PLACE_ORDER_START: return placeOrderStart(state, action);
        case actionTypes.PLACE_ORDER_SUCCESS: return placeOrderSuccess(state, action);
        case actionTypes.PLACE_ORDER_FAIL: return placeOrderFail(state, action);
        default:
            return state
    }
}

export default placeOrderReducer;