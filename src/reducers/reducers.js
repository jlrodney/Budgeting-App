import { combineReducers } from 'redux';
import expenses from './expenses';
import authReducer from './auth';

const rootReducer = combineReducers({ expenses, auth: authReducer });

export default rootReducer;
