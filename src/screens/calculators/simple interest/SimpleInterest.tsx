import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FormAppBar from '../../../styled components/FormAppBar'
import { StackScreenProps } from '@react-navigation/stack'
import { HomeStackParamList } from '../../../navigation/HomeStack'
import FormContainer from '../../../styled components/FormContainer'

type Props = StackScreenProps<HomeStackParamList>

const SimpleInterest = ({ navigation, route }: Props) => {
    // const { name } = route.params || { name: 'FinEasy' }
    return (
        <>
            <FormAppBar navigation={navigation} route={route} />
            <FormContainer>
            </FormContainer>
        </>
    )
}

export default SimpleInterest

const styles = StyleSheet.create({})