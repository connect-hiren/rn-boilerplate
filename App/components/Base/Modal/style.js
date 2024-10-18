import { StyleSheet } from 'react-native';
import { AppFonts } from '../../../helper/AppFonts';
import { ScaleFonts } from '../../../helper/ScaleFonts';
import { ScaleSize } from '../../../helper/ScaleSize';

// import { AppFonts, Colors, ScaleFonts, ScaleSize } from '../../../helper';
export const createStyles = colors =>
  StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      width: '80%',
      padding: ScaleSize.SPACING_20,
      backgroundColor: colors.primary,
      borderRadius: ScaleSize.SPACING_10,
      alignItems: 'center',
    },
    headerText: {
      fontSize: ScaleFonts.SIZE_20,
      color: colors.secondary,
      fontFamily: AppFonts.Bold,
      marginBottom: ScaleSize.SPACING_10
    },
    title: {
      fontSize: ScaleFonts.SIZE_18,
      color: colors.secondary,
      fontFamily: AppFonts.SemiBold,
      marginBottom: ScaleSize.SPACING_10,
    },
    description: {
      fontSize: ScaleFonts.SIZE_16,
      color: colors.secondary,
      marginBottom: 20
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: '100%'
    },
    button: {
      // flex: 1,
      padding: 10,
      alignItems: 'flex-end',
      marginHorizontal: 5,
      borderRadius: 5,
      // alignItems: 'center'
    },
    buttonText: {
      fontSize: ScaleFonts.SIZE_16,
      color: colors.secondary,
      fontWeight: 'bold'
    }
  });
