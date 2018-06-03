import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const enhancers = [
  applyMiddleware(thunk),
].filter(Boolean);
const store = createStore(rootReducer, compose(...enhancers));
export default store;