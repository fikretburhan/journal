import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import TabNavigator from './TabNavigator';
import {navigationRef} from './RootNavigator';
import HomeNavigator from './HomeNavigator';

export default class AppNavContainer extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <HomeNavigator />
      </NavigationContainer>
    );
  }
}
