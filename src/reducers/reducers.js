import { combineReducers } from 'redux';
import expenses from './expenses';

const rootReducer = combineReducers({ expenses });

export default rootReducer;
