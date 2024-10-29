import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../helper/constants';
import SplashScreen from '../screens/SplashScreen';
import DrawerMain from './DrawerNavigator';
import TabNavigator from './TabNavigator';
import HomeScreen from '../screens/HomeScreen';
import ReduxForm from '../screens/ReduxForm';

export const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Screens.SplashScreen} component={SplashScreen} />
      <Stack.Screen name={Screens.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={Screens.ReduxForm} component={ReduxForm} />
      {/* <Stack.Screen name={Screens.HomeScreen} component={DrawerMain} /> */}
      {/* <Stack.Screen name={Screens.HomeScreen} component={TabNavigator} /> */}
    </Stack.Navigator>
  );
}; 