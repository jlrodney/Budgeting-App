import { combineReducers } from 'redux';
import expenses from './expenses';
import authReducer from './auth';
import filtersReducer from '../reducers/filters';


const rootReducer = combineReducers({
  expenses: expenses,
  filters: filtersReducer,
  auth: authReducer });

export default rootReducer;
