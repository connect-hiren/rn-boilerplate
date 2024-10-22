import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../helper/constants';
import SplashScreen from '../screens/SplashScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawer1 from '../screens/DrawerScreens/Drawer1';
import Drawer2 from '../screens/DrawerScreens/Drawer2';
import Drawer3 from '../screens/DrawerScreens/Drawer3';
import { StyleSheet } from 'react-native';
import { DrawerMain } from './DrawerNavigator';

export const AppNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Screens.SplashScreen} component={SplashScreen} />
      <Stack.Screen name={Screens.HomeScreen} component={DrawerMain} />
    </Stack.Navigator>
  );
};


