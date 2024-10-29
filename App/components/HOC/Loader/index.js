import { useTheme } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Modal, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { View } from '../../Base/index';
import { createStyles } from './style';
import { ScaleSize } from '../../../helper/ScaleSize';

const Loader = () => {

  const values = useSelector(state => state.loader);

  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <Modal visible={values} transparent={true}>
      <StatusBar backgroundColor={'#ffffff60'} animated={true} />
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            size={ScaleSize.SPACING_40}
            color={colors.primary}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;
