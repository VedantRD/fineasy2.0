import { StyleSheet, Text, View, StatusBar, useColorScheme } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native';
import { useAppTheme } from '../theme/AppTheme';

type Props = {
    // backgroundColor: string
}

const MyStatusBar = (props: Props) => {
    const isFocused = useIsFocused();
    const { colors } = useAppTheme();
    const colorScheme = useColorScheme()
    return (
        isFocused ?
            <StatusBar
                backgroundColor={colors.background}
                barStyle={colorScheme == 'light' ? 'dark-content' : 'light-content'}
            />
            :
            null
    )
}

export default MyStatusBar

const styles = StyleSheet.create({})