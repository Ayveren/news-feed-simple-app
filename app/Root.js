import React, {Component} from 'react';
import {AppState, AsyncStorage} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import Routes from './Routes';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange.bind(this));
    this.setFreshStart();
  }

  setFreshStart = async () => {
    // Setting that the app has just started, before store is hydrated.
    try {
      await AsyncStorage.setItem('freshStart', 'true'); // Async storage does not like booleans so we do it this way
    } catch (error) {
      console.error({message: 'Error saving true in fresh start', error});
    }
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange.bind(this));
  }

  _handleAppStateChange(appState) {
    if (appState === 'active' && this.state.appState === 'background') {
      this.setState({appState});
    }
  }

  _onLayout = () => {
    return this.forceUpdate()
  }

  render() {
    return (
      <Provider store={store}>
        <Routes onLayout={() => this._onLayout()}/>
      </Provider>
    )
  }
}

