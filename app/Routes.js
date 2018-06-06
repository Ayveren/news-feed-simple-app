import React from 'react';
import { createStackNavigator } from 'react-navigation';
import StartPage from './components/StartPage';
import FeedPage from './components/FeedPage';


export default Routes = createStackNavigator(
  {
    StartPage: StartPage,
    FeedPage: FeedPage,
  },
  {
    initialRouteName: 'StartPage',
  }
);