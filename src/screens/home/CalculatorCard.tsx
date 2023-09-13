import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Surface, Text } from 'react-native-paper'
import FastImage from 'react-native-fast-image'
import { ImageProps } from 'react-native'
import MyText from '../../styled components/MyText'
import withCalculatorFunctions from '../../hoc/withCalculatorFunctions'
import { useAppTheme } from '../../theme/AppTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigation } from '../../navigation/HomeStack'

type Props = {
    calculator: Calculator,
    calculatorUtilities: React.ReactNode
}

const CalculatorCard = ({ calculator: { icon, name, navScreen }, calculatorUtilities }: Props) => {
    const { colors } = useAppTheme();
    const navigation = useNavigation<HomeStackNavigation>();
    // console.log(calculator)
    return (
        <TouchableOpacity onPress={() => navigation.navigate(navScreen as any)}>
            <Surface style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
                height: 110,
                backgroundColor: colors.background,
                borderRadius: 10
            }}
                elevation={3}
            >
                <View
                    style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}
                >
                    <Image
                        style={{ width: 35, height: 35 }}
                        source={icon as any}
                    />
                </View>
                <View
                    style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}
                >
                    <Text numberOfLines={2} variant='bodySmall' style={{ textAlign: 'center' }}>{name}</Text>
                </View>
            </Surface>
        </TouchableOpacity>
    )
}

export default withCalculatorFunctions(CalculatorCard)

const styles = StyleSheet.create({})