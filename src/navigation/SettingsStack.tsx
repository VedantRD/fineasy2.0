import React from 'react'
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import Settings from '../screens/settings/Settings'

export type SettingsStackParamList = {
    Settings: undefined
};

const Stack = createStackNavigator<SettingsStackParamList>();

export type SettingsStackNavigation = StackNavigationProp<SettingsStackParamList>;

const SettingsStack = () => {
    return (
        <Stack.Navigator initialRouteName="Settings" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    )
}

export default SettingsStack