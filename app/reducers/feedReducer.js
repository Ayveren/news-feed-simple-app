import * as actions from '../actions/authActions';
import initialState from './initialState';

export default function feedReducer(state = initialState.articles, action) {
  switch (action.type) {
    case actions.GET_NEWS_SUCCESS:
      console.log(action);
      return state.articles;
    case actions.GET_NEWS_ERROR:
    default:
      return state;
  }
}
