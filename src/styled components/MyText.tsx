import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { useAppTheme } from '../theme/AppTheme'

type Props = {
    children: string | string[]
}

const MyText = (props: Props) => {
    const { colors } = useAppTheme();
    return (
        <Text style={{ color: colors.text }} variant='bodyMedium'>
            {props.children}
        </Text>
    )
}

export default MyText

const styles = StyleSheet.create({})