import { StyleSheet } from 'react-native';
import { ScaleFonts } from '../../helper/ScaleFonts';
import { ScaleSize } from '../../helper/ScaleSize';
import { AppFonts } from '../../helper/AppFonts';

export const createStyles = colors =>
    StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: colors.primary,
        },
        container: {
            padding: ScaleSize.SPACING_20,
        },
        fieldContainer: {
            marginBottom: ScaleSize.SPACING_20,
        },
        input: {
            borderBottomWidth: ScaleSize.SPACING_2 / 2,
            fontSize: ScaleFonts.SIZE_18,
            color:colors.secondary
        },
        error: {
            color: colors.error,
            fontSize: ScaleFonts.SIZE_16,
            marginLeft:ScaleSize.SPACING_5
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
            fontFamily:AppFonts.FONT_REGULAR,
            alignSelf:'center'
        }
    }); 
