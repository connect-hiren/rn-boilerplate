import React, { useEffect } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { createStyles } from './style';
import { Screens } from '../../helper/constants';
import { Text, View } from '../../components/Base';
import { useTranslation } from 'react-i18next';

const SplashScreen = () => {

  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation()

  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(Screens.HomeScreen)
    }, 2000);
  }, [])
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('str_splash_screen')}</Text>
    </View>
  )
}

export default SplashScreen