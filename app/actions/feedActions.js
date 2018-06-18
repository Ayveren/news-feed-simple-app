import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import NewsAPI from 'newsapi';
import {API_KEY, DEFAULT_CATEGORY, DEFAULT_COUNTRY} from '../utils/constants';

const newsapi = new NewsAPI(API_KEY);

export function getNewsSuccess(data) {
  return {type: types.GET_NEWS_SUCCESS, data};
}

export function getNewsError(error) {
  return {type: types.GET_NEWS_ERROR, error};
}

export function getNews(category = DEFAULT_CATEGORY, country = DEFAULT_COUNTRY, query) {
  const requestData = {
    category,
    country
  };
  !!query && (requestData.query = query);
  return (dispatch) => {
    dispatch(beginAjaxCall());
    newsapi.v2.topHeadlines(requestData)
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
// const url = 'https://newsapi.org/v2/top-headlines?country=ua&category=general&apiKey=5a5d921e5e404a3bacbb7be011160084';

// newsapi.v2.topHeadlines({
//   sources: 'bbc-news,the-verge',
//   q: 'bitcoin',
//   category: 'general',
//   language: 'en',
//   country: 'ua'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });