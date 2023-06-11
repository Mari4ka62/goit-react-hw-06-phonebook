import { combineReducers } from 'redux';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

export const reducer = combineReducers({
  contact: contactsReducer,
  filter: filterReducer,
});
