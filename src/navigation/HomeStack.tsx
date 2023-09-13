import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Home from '../screens/home/Home';
import SimpleInterest from '../screens/calculators/simple interest/SimpleInterest';
import CompoundInterest from '../screens/calculators/compound interest/CompoundInterest';

export type HomeStackParamList = {
    Home: any | undefined;
    SimpleInterest: any | undefined;
    CompoundInterest: any | undefined;
};

export type HomeStackNavigation = StackNavigationProp<HomeStackParamList>;

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SimpleInterest" component={SimpleInterest} />
            <Stack.Screen name="CompoundInterest" component={CompoundInterest} />
        </Stack.Navigator>
    )
}

export default HomeStack