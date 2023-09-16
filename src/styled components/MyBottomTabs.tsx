import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { useAppTheme } from '../theme/AppTheme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

type Props = {
    navigation: any,
    state: any,
    descriptors: any
}

const iconNames: any = {
    'HomeStack': 'home-outline',
    'Info': 'book-outline',
    'SavedStack': 'bookmark-outline',
    'SettingsStack': 'settings-outline'
}

const MyBottomTabs = ({ navigation, state, descriptors }: Props) => {
    const { colors } = useAppTheme();
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: colors.background,
            shadowRadius: 2,
            shadowOffset: {
                width: 0,
                height: -3,
            },
            shadowColor: '#000000',
            elevation: 4,
            shadowOpacity: 1.0,
            borderColor: 'gray',
            borderTopWidth: 0.5,
            marginTop: 0,
            height: 60
        }}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderTopWidth: isFocused ? 2 : 0,
                            width: '20%',
                            height: 60,
                            borderColor: colors.primary
                        }}
                        key={index}
                    >
                        <Ionicons name={iconNames[route.name]} size={25} style={{ color: isFocused ? colors.primary : '#222' }} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

// const styles = StyleSheet.create({
//     tabbar:{
//         flexDirection:'row'
//     }
// });

export default MyBottomTabs;