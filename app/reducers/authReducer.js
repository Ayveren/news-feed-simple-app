import * as actions from '../actions/authActions';
import initialState from './initialState';

export default function auth(state = initialState.isSignedUp, action) {
  switch (action.type) {
    case actions.AUTH_SIGNUP_SUCCESS:
      return true;
    case actions.AUTH_SIGNUP_ERROR:
    case actions.AUTH_LOGOUT:
    default:
      return state;
  }
}
