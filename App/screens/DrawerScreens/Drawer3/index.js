import { View, Text } from 'react-native'
import React from 'react'
import { createStyles } from './style';
import { useTheme } from '@react-navigation/native';

const Drawer3 = () => {

    const { colors } = useTheme();
    const styles = createStyles(colors);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Drawer3</Text>
        </View>
    )
}

export default Drawer3