import { StyleSheet } from 'react-native';
import { ScaleSize } from '../../../helper/ScaleSize';

export const createStyles = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      alignItems: 'center',
    },
    loaderContainer: {
      backgroundColor: colors.secondary,
      paddingVertical: ScaleSize.SPACING_40,
      paddingHorizontal: ScaleSize.SPACING_40,
      borderRadius: ScaleSize.SPACING_20,
      borderColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
