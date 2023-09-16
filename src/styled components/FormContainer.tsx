import { View, Text, StatusBar, ScrollView, useColorScheme } from 'react-native'
import React from 'react'
import { useAppTheme } from '../theme/AppTheme';
import MyStatusBar from './MyStatusBar';

type Props = {
    children?: React.ReactNode;
}

type BarStyle = 'light-content' | 'dark-content'

const FormContainer = ({ children }: Props) => {
    const colorScheme = useColorScheme();
    const barStyle = colorScheme === 'dark' ? 'light-content' : 'dark-content'
    const { colors } = useAppTheme();
    return (
        <>
            <MyStatusBar />
            <ScrollView style={{ flex: 1, backgroundColor: colors.background }} keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ backgroundColor: colors.background, padding: 15, flex: 1 }}>
                    {children}
                </View>
            </ScrollView>
        </>
    )
}

export default FormContainer