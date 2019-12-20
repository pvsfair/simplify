import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Auth from './pages/Auth/auth';

const AuthStack = createStackNavigator(
  {
    Auth,
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
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);
