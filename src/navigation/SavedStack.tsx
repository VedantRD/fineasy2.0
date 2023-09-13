import React from 'react'
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import Saved from '../screens/saved/Saved';

export type SavedStackParamList = {
    Saved: undefined
};

const Stack = createStackNavigator<SavedStackParamList>();

export type SavedStackNavigation = StackNavigationProp<SavedStackParamList>;

const SavedStack = () => {
    return (
        <Stack.Navigator initialRouteName="Saved" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Saved" component={Saved} />
        </Stack.Navigator>
    )
}

export default SavedStack