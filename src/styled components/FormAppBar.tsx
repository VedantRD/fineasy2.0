import React from 'react'
import { Appbar } from 'react-native-paper';
import { HomeStackNavigationProp, HomeStackParamList, HomeStackRouteProp } from '../navigation/HomeStack';
import { useAppTheme } from '../theme/AppTheme';

type Props = {
    navigation: HomeStackNavigationProp,
    route: HomeStackRouteProp
}

const FormAppBar = ({ navigation, route }: Props) => {
    const { name } = route.params || { name: 'Not Found' }
    const { colors } = useAppTheme();
    return (
        <Appbar.Header style={{ backgroundColor: colors.background }}>
            <Appbar.BackAction onPress={() => { navigation.goBack() }} />
            <Appbar.Content title={name} titleStyle={{ alignSelf: 'center' }} />
            <Appbar.Action icon="bookmark-outline" onPress={() => { }} />
        </Appbar.Header>
    )
}

export default FormAppBar