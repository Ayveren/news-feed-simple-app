import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState'
import thunk from 'redux-thunk';

const store = createStore(rootReducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;


