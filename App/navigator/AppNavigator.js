import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens } from '../helper/constants';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

export const AppNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Screens.SplashScreen} component={SplashScreen}/>
            <Stack.Screen name={Screens.HomeScreen} component={HomeScreen}/>
        </Stack.Navigator>
    )
}
