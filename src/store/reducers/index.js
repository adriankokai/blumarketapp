import { combineReducers } from 'redux';
import fetchProductReducer from './fetchProduct';

const rootReducer = combineReducers({
   fetchProduct: fetchProductReducer,
})

export default rootReducer;