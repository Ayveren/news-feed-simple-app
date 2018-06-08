import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function feedReducer(state = initialState.articles, action) {
  switch (action.type) {
    case types.GET_NEWS_SUCCESS:
      return action.data.articles;
    case types.GET_NEWS_ERROR:
    default:
      return state;
  }
}
