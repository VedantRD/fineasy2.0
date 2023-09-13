import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import { useAppTheme } from '../theme/AppTheme'
import { ScrollView } from 'react-native'
import { Text } from 'react-native-paper'

type Props = {
    children?: React.ReactNode;
    heading?: string,
    description?: string,
}

const MyContainer = ({ children, heading, description }: Props) => {
    const { colors } = useAppTheme();
    return (
        <>
            <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
            <ScrollView style={{ flex: 1, backgroundColor: colors.primary }} keyboardShouldPersistTaps='handled' contentContainerStyle={{ flexGrow: 1 }}>
                {
                    heading && description &&
                    <View style={{ backgroundColor: colors.primary, paddingHorizontal: 10, paddingVertical: 25 }}>
                        <Text variant='headlineLarge' style={{ color: colors.light }}>{heading}</Text>
                        <Text variant='bodyMedium' style={{ color: colors.light }}>{description}</Text>
                    </View>
                }
                <View style={{ backgroundColor: colors.background, borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 15, flex: 1 }}>
                    {children}
                </View>
            </ScrollView>
        </>
    )
}

export default MyContainer

const styles = StyleSheet.create({})