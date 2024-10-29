import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import { Screens } from "../helper/constants";
import Drawer1 from "../screens/DrawerScreens/Drawer1";
import Drawer2 from "../screens/DrawerScreens/Drawer2";
import Drawer3 from "../screens/DrawerScreens/Drawer3";
import { useTheme } from "@react-navigation/native";
import { ScaleFonts } from "../helper/ScaleFonts";

const DrawerMain = () => {
  const Drawer = createDrawerNavigator();

  const colors = useTheme()
  const styles = createStyles(colors);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'slide',
        drawerPosition: 'left',
        drawerStyle: styles.drawerStyle,
        headerShown: true,
        headerTintColor: '#fff',
        headerStyle: styles.headerStyle,
      }}
    >
      <Drawer.Screen
        name={Screens.Drawer1}
        component={Drawer1}
        options={{
          drawerLabel: 'Drawer 1',
          drawerActiveTintColor: '#e91e63',
          drawerInactiveTintColor: '#000',
        }}
      />
      <Drawer.Screen
        name={Screens.Drawer2}
        component={Drawer2}
        options={{
          drawerLabel: 'Drawer 2',
          drawerActiveTintColor: '#e91e63',
          drawerInactiveTintColor: '#000',
        }}
      />
      <Drawer.Screen
        name={Screens.Drawer3}
        component={Drawer3}
        options={{
          drawerLabel: 'Drawer 3',
          drawerActiveTintColor: '#e91e63',
          drawerInactiveTintColor: '#000',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerMain

const createStyles = colors =>
  StyleSheet.create({
      container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.primary
      },
      text: {
          fontSize: ScaleFonts.SIZE_24,
          color:colors.secondary,
      },
      drawerStyle: { backgroundColor: '#f9f9f9'},
        headerStyle: { backgroundColor: '#6200ee'},
  }); 

