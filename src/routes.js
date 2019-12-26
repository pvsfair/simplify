import {Text, Image, View, TouchableOpacity} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Auth from './pages/Auth/auth';
import ForgotPass from './pages/Auth/forgotPassword';

import Home from './pages/App/home';
import Config from './pages/App/config';
import Profile from './pages/App/profile';

import Meeting from './pages/App/meeting';
import RoomSchedule from './pages/App/meeting/roomSchedule';
import MeetingForm from './pages/App/meeting/meetingForm';

import Refund from './pages/App/refund';
import RefundForm from './pages/App/refund/refundForm';

import React from 'react';
import {logo_horizontal, meetings_miami} from '../assets/images';
import {filter} from '../assets/icons';

const AuthStack = createStackNavigator(
  {
    Auth,
    ForgotPass,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0154C6',
      },
      headerTintColor: '#FFF',
    },
  },
);
const HomeStack = createStackNavigator(
  {
    Main: Home,
    Meeting,
    RoomSchedule,
    MeetingForm,
    Refund,
    RefundForm,
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0154C6',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
      headerTitle: (
        <Image
          source={logo_horizontal}
          style={{
            height: 30,
            width: 130,
            alignSelf: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}
          resizeMode="contain"
        />
      ),
      // headerRight: (
      //   <TouchableOpacity style={{width: 20, height: 20, marginRight: 18}}>
      //     <Image
      //       style={{width: 20, height: 20}}
      //       source={filter}
      //       resizeMode="contain"
      //     />
      //   </TouchableOpacity>
      // ),
    },
  },
);
const BottomNavigationStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Início',
        tabBarIcon: ({tintColor}) => (
          <Text style={{color: tintColor}}>Casinha</Text>
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Perfil',
        tabBarIcon: ({tintColor}) => (
          <Text style={{color: tintColor}}>Crachá</Text>
        ),
      },
    },
    Config: {
      screen: Config,
      navigationOptions: {
        tabBarLabel: 'Conf.',
        tabBarIcon: ({tintColor}) => (
          <Text style={{color: tintColor}}>Engrenagens</Text>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    order: ['Profile', 'Home', 'Config'],
    tabBarOptions: {
      activeTintColor: '#0167D1',
      inactiveTintColor: '#878787',
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0154C6',
      },
      headerTintColor: '#FFF',
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: BottomNavigationStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);
