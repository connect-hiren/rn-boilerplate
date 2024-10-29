import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigator } from './navigator/AppNavigator'
import { darkColor, lightcolor } from './helper/colors'
import { Provider } from 'react-redux'
import store from './redux/store'
import MainContainer from './container/Maincontainer'

const App = () => {

  const theme = 'dark'

  if (!theme === 'dark') {
    mode = { colors: { ...darkColor } };
  } else {
    mode = { colors: { ...lightcolor } };
  }

  return (
    <Provider store={store}>
      <NavigationContainer theme={mode} >
        <AppNavigator />
        <MainContainer />
      </NavigationContainer>
    </Provider>
  )
}

export default App