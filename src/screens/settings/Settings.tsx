import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Surface, Text } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MyContainer from '../../styled components/MyContainer'
import { useAppTheme } from '../../theme/AppTheme'

type Props = {}

const Settings = (props: Props) => {
    const { colors } = useAppTheme();
    return (
        <MyContainer heading='Settings' description='Your personal finance calculator'>
            <Surface style={{ marginBottom: 10, padding: 15, borderRadius: 10, backgroundColor: colors.background }} elevation={5}>
                <TouchableOpacity>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text variant='titleMedium'>About Us</Text>
                        <Ionicons name="chevron-forward" size={25} />
                    </View>
                </TouchableOpacity>
            </Surface>
            <Surface style={{ marginBottom: 10, padding: 15, borderRadius: 10, backgroundColor: colors.background }} elevation={5}>
                <TouchableOpacity>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text variant='titleMedium'>Feedback and Rating</Text>
                        <Ionicons name="chevron-forward" size={25} />
                    </View>
                </TouchableOpacity>
            </Surface>
        </MyContainer>
    )
}

export default Settings

const styles = StyleSheet.create({})