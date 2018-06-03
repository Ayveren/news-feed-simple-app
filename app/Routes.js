import React, {Component} from 'react';
import {Scene, Reducer, Router, ActionConst} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import store from './store/configureStore';

import ajaxStatusActions from './actions/ajaxStatusActions';
import StartPage from './components/StartPage';
import FeedPage from './components/FeedPage';

const ANIMATION_DURATION = 300;
const ANIMATION_SCROLL_DURATION = 400;

function mapStateToProps(state) {
  return {
    loading: state
  };
}

const reducerCreate = params => {
  const defaultReducer = Reducer(params);
  return (state, action) => {
    const newState = defaultReducer(state, action);
    store.dispatch({...action, state: newState});
    return newState;
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ajaxStatusActions
  }, dispatch);
}

class Routes extends Component {

  render() {
    return (
      <Router createReducer={reducerCreate}>
        <Scene key="root" duration={ANIMATION_DURATION}>
          <Scene
            key="startPage"
            type={ActionConst.RESET}
            component={StartPage}
            duration={ANIMATION_SCROLL_DURATION}
          />
          <Scene
            key="feedPage"
            component={FeedPage}
            duration={ANIMATION_SCROLL_DURATION}
          />
        </Scene>
      </Router>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);