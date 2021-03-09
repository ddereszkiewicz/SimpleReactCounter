import { combineReducers } from 'redux';
import counters from './countersReducer'

const rootReducer = combineReducers({ counters });
export default rootReducer;