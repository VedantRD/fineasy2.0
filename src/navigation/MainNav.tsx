import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import Home from "../screens/home/Home";
import MyBottomTabs from "../styled components/MyBottomTabs";

// const Stack = createStackNavigator();

const MainNav = () => {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator screenOptions={{ headerShown: false }}> */}
            {/* <Stack.Screen name="AppStart" component={AppStartScreen} /> */}
            <BottomTabs />
            {/* <Stack.Screen name="Main" component={MyBottomTabs} /> */}
            {/* </Stack.Navigator> */}
        </NavigationContainer>
    );
}

export default MainNav