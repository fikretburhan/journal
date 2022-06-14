import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import TabNavigator from './TabNavigator';
import {navigationRef} from './RootNavigator';
import HomeNavigator from './HomeNavigator';
import {JournalContext} from '../context/Provider';

export default class AppNavContainer extends Component {
  static contextType = JournalContext;
  render() {
    const {
      authState: {isLoggedIn},
    } = this.context;
    return (
      <NavigationContainer ref={navigationRef}>
        {isLoggedIn ? <AuthNavigator /> : <HomeNavigator />}
      </NavigationContainer>
    );
  }
}
