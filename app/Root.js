import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from './store/configureStore'
import Routes from './Routes'
import { Font, AppLoading } from 'expo';

export default class Root extends Component {
  state = {
    isReady: false,
  };

  async cashFonts() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.cashFonts}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    )
  }
}

