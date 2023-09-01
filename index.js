/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {BootstrapInner} from './src/root/bootstrap';

AppRegistry.registerComponent(appName, () => BootstrapInner);
