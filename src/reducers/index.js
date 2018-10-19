import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  routing: routerReducer,
  reducer
});
