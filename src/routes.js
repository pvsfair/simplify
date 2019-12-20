import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Auth from './pages/Auth/auth';
import ForgotPass from './pages/Auth/forgotPassword';
import Home from './pages/App/home';

const AuthStack = createStackNavigator(
  {
    Auth,
    ForgotPass,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFF',
    },
  },
);
const AppStack = createStackNavigator(
  {
    Home,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFF',
    },
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);
