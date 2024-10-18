import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigator } from './navigator/AppNavigator'
import { darkColor, lightcolor } from './helper/colors'

const App = () => {

  const theme = 'dark'

  if (!theme === 'dark') {
    mode = { colors: { ...darkColor } };
  } else {
    mode = { colors: { ...lightcolor } };
  }

  return (
    <NavigationContainer theme={mode}>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default App