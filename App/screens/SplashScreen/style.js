import { StyleSheet } from 'react-native';
import { ScaleFonts } from '../../helper/ScaleFonts';

export const createStyles = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.primary
        },
        text: {
            fontSize: ScaleFonts.SIZE_24,
            color:colors.secondary,
        }
    }); 
