import { combineReducers } from 'redux';
import cars from './cars';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
  cars,
  errors,
  messages,
  auth,
});