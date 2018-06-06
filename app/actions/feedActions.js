import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function getNewsSuccess(data) {
  return {type: types.GET_NEWS_SUCCESS, data};
}

export function getNewsError(error) {
  return {type: types.GET_NEWS_ERROR, error};
}
const url = 'https://newsapi.org/v2/top-headlines?country=ua&category=general&apiKey=5a5d921e5e404a3bacbb7be011160084';
export function getNews() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        dispatch(getNewsSuccess(data));
      })
      .catch((error) => {
        dispatch(ajaxCallError());
        dispatch(getNewsError(error));
        throw(error);
      })
  };
}
