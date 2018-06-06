import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from './store/configureStore'
import Routes from './Routes'

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    )
  }
}

