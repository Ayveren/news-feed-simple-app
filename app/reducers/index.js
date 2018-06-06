import {persistCombineReducers} from 'redux-persist';
import ajaxCallsInProgress from './ajaxStatusReducer';
import isSignedUp from './authReducer';
import articles from './feedReducer';
import storage from 'redux-persist/lib/storage';

const config = {
  key: 'primary',
  storage
};

const rootReducer = persistCombineReducers(
  config,
  {
    ajaxCallsInProgress,
    isSignedUp,
    articles
  }
);

export default rootReducer;
