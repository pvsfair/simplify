/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import moment from 'moment';

moment.locale('pt');

AppRegistry.registerComponent(appName, () => App);
