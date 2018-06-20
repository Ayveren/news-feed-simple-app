import React from 'react';
import {createStackNavigator} from 'react-navigation';
import StartPage from './components/StartPage';
import FeedPage from './components/FeedPage';
import CustomHeader from './components/Header';

export default Routes = createStackNavigator(
  {
    StartPage: StartPage,
    FeedPage: {
      screen: FeedPage,
      navigationOptions: () => ({
        header: () => <CustomHeader/>
      }),
    }
  },
  {
    initialRouteName: 'StartPage',
  }
);

