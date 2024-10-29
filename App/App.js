import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainContainer from './container/Maincontainer';
import { ThemeProvider, ThemeContext } from './helper/ThemeContext';
import { AppNavigator } from './navigator/AppNavigator';


const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </Provider>
  );
};

const ThemedApp = () => {
  const { themeColors } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={{ colors: themeColors }}>
      <AppNavigator />
      <MainContainer />
    </NavigationContainer>
  );
};

export default App;
