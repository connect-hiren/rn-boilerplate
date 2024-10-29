import React, { useContext } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { createStyles } from './style';
import { Text, View } from '../../components/Base';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { dummyAction } from '../../redux/action/demoAction';
import { Screens } from '../../helper/constants';
import { ThemeContext } from '../../helper/ThemeContext';


const HomeScreen = () => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { toggleTheme } = useContext(ThemeContext);

  const loaderDemo = () => {
    dispatch(dummyAction());
  };

  const goToFormDemo = () => {
    navigation.navigate(Screens.ReduxForm);
  };

  const goForContextAPiDemo = () => {
    toggleTheme(); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('str_home_screen')}</Text>

      <TouchableOpacity style={styles.touchableStyle} onPress={loaderDemo}>
        <Text style={styles.startText}>Loader Start</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchableStyle} onPress={goToFormDemo}>
        <Text style={styles.startText}>Redux Form Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchableStyle} onPress={goForContextAPiDemo}>
        <Text style={styles.startText}>Toggle Theme</Text>
        <Text style={styles.startText}>Context API</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
