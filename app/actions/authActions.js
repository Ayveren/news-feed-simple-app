import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import {getNews} from './feedActions';

export function authSuccess(data) {
  return {type: types.AUTH_SIGNUP_SUCCESS, data};
}

export function authError(error) {
  return {type: types.AUTH_SIGNUP_ERROR, error};
}

export function signup({password, email}) {
  const url = 'https://google.com/signup';
  const payload = {
    email,
    password
  };

  let data = new FormData();
  data.append("json", JSON.stringify(payload));

  return (dispatch) => {
    dispatch(beginAjaxCall());
    fetch(url,
      {
        method: "post",
        body: data
      })
      .then(response => response.json())
      .then((data) => {
        dispatch(authSuccess(data));
      })
      .catch((error) => {
        dispatch(ajaxCallError());
        dispatch(authError(error));
        throw(error);
      })
      .finally(()=> dispatch(getNews()))
  };
}
