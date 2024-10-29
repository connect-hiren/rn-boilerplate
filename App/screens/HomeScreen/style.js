import { StyleSheet } from 'react-native';
import { ScaleFonts } from '../../helper/ScaleFonts';
import { ScaleSize } from '../../helper/ScaleSize';
import { AppFonts } from '../../helper/AppFonts';

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
        },
        touchableStyle:{
            backgroundColor:colors.secondary,
            paddingVertical:ScaleSize.SPACING_15,
            paddingHorizontal:ScaleSize.SPACING_40,
            marginTop:ScaleSize.SPACING_20,
            borderRadius:ScaleSize.SPACING_20
        },
        startText:{
            color:colors.primary,
            fontSize:ScaleFonts.SIZE_18,
            fontFamily:AppFonts.FONT_REGULAR
        }
    }); 
