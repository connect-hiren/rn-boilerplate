import { Text } from '../../components/Base';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { createStyles } from './style';

const HomeScreen = () => {

  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <Text>Home Screen</Text>
  )
}



export default HomeScreen 

