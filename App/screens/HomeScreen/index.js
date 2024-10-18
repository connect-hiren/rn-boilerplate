import { Text, View } from '../../components/Base';
import React from 'react'
import { useTheme } from '@react-navigation/native';
import { createStyles } from './style';

const HomeScreen = () => {

  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen