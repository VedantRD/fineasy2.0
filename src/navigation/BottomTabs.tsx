import MyBottomTabs from '../components/MyBottomTabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../screens/settings/Settings';
import Info from '../screens/info/Info';
import HomeStack, { HomeStackParamList } from './HomeStack';
import Home from '../screens/home/Home';
import SettingsStack from './SettingsStack';
import SavedStack from './SavedStack';

export type BottomTabsParamList = {
    HomeStack: undefined;
    Info: undefined;
    SavedStack: undefined;
    SettingsStack: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}
            tabBar={(props: any) => <MyBottomTabs {...props} />}
        >
            <Tab.Screen name="HomeStack" component={HomeStack} />
            <Tab.Screen name="Info" component={Info} />
            <Tab.Screen name="SavedStack" component={SavedStack} />
            <Tab.Screen name="SettingsStack" component={SettingsStack} />
        </Tab.Navigator>
    );
};

export default BottomTabs