import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from '../components/Base';
import { Screens } from '../helper/constants';
import Tab1 from '../screens/TabScreens/Tab1';
import Tab2 from '../screens/TabScreens/Tab2';
import Tab3 from '../screens/TabScreens/Tab3';
import { Platform, StyleSheet } from "react-native";
import { ScaleSize } from '../helper/ScaleSize';
import { ScaleFonts } from '../helper/ScaleFonts';

const Tab = createBottomTabNavigator();

const CustomTabBarLabel = ({ focused, title }) => {
    return (
        <View style={[styles.tab]}>
            <Text style={[styles.tabLabel, focused ? styles.activeTabLabel : {}]}>{title}</Text>
        </View>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarLabel: ({ focused }) => (
                    <CustomTabBarLabel focused={focused} title={route.name} />
                ),
                tabBarIconStyle: { display: "none" },
                tabBarStyle: styles.tabBar,

            })}
        >
            <Tab.Screen name={Screens.Tab1} component={Tab1} />
            <Tab.Screen name={Screens.Tab2} component={Tab2} />
            <Tab.Screen name={Screens.Tab3} component={Tab3} />
        </Tab.Navigator>
    );
};



export default TabNavigator;



const styles = StyleSheet.create({
    tabBar: {
        height: Platform.OS === 'ios' ? ScaleSize.SPACING_90 : ScaleSize.SPACING_50,
        backgroundColor: '#f8f8f8',
    },
    tab: {
        paddingBottom: ScaleSize.SPACING_15,
        paddingTop: ScaleSize.SPACING_5,
    },
    tabLabel: {
        fontSize: ScaleFonts.SIZE_16,
        color: 'black',
    },
    activeTabLabel: {
        fontWeight: 'bold',
        fontSize: ScaleFonts.SIZE_18
    },
})