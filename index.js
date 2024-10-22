import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App/App';
import './App/helper/languages/index';
import 'react-native-gesture-handler';



AppRegistry.registerComponent(appName, () => App);
