 import React, { Component } from 'react';
 import {} from 'react-native';
 import { createAppContainer } from 'react-navigation';
 import { createStackNavigator } from 'react-navigation-stack';
 
 import SplashScreen from './Splash';
 import HomeScreen from './Home';
 import OnboardingScreen from './Onboarding';

 const MainNavigator = createStackNavigator({
     Splash: {screen: SplashScreen},
     Onboarding: {screen: OnboardingScreen},
     Home: {screen: HomeScreen},
 }, {
     headerMode: 'none',
     navigationOptions: {
         headerVisible: false,
     }
 });

 export default createAppContainer(
    MainNavigator
 );