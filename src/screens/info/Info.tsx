import { View, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyContainer from '../../styled components/MyContainer'
import calculatorInfo from '../../assets/data/calculatorInfo'
import { Text, Searchbar } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useAppTheme } from '../../theme/AppTheme'

type Props = {}

const Info = (props: Props) => {
    const { colors } = useAppTheme();

    const info: any = calculatorInfo

    const list: any = Object.keys(info).map((item) => {
        info[item].key = item;
        return info[item]
    })

    const [infoList, setInfoList] = useState(list)
    const [searchText, setSearchText] = useState("");

    const onChangeSearch = (text: any) => {
        setSearchText(text)
        if (text !== "") {
            let pattern = new RegExp('^.*' + text.toLowerCase() + '.*$', 'i')
            let temp: any = list.filter((item: any) =>
                item.name.toLowerCase().match(pattern)
                ||
                item.subName.toLowerCase().match(pattern)
            )
            setInfoList(temp)
        }
        else {
            setInfoList(list)
        }
    };

    return (
        <MyContainer heading='Info' description='Details of calculator and investment schemes'>
            <Searchbar
                placeholder="Search Information"
                onChangeText={onChangeSearch}
                value={searchText}
                // theme={{ colors: { primary: colors.primary } }}
                elevation={5}
                style={{ marginBottom: 15, backgroundColor: colors.background, borderWidth: 1, borderColor: colors.primary, borderRadius: 15 }}
            />
            <FlatList
                data={infoList as any}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1, marginBottom: 15 }}>
                        {/* <View > */}
                        <View>
                            <Text variant='titleMedium'>{item.name}</Text>
                            <Text variant='bodyMedium' style={{ opacity: 0.75 }}>{item.subName}</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={25} />
                        {/* </View> */}
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.name}
                scrollEnabled={false}
            />
        </MyContainer>
    )
}

export default Info