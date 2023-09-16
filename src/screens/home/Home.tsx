import { View } from 'react-native'
import React from 'react'
import { useAppTheme } from '../../theme/AppTheme'
import MyContainer from '../../styled components/MyContainer'
import calculatorData from '../../assets/data/calcualtorData'
import { Text } from 'react-native-paper'
import CalculatorCard from './CalculatorCard'
import { FlatGrid } from 'react-native-super-grid'
import withCalculatorFunctions from '../../hoc/withCalculatorFunctions'
import { StackScreenProps } from '@react-navigation/stack'
import { HomeStackParamList } from '../../navigation/HomeStack'

type Props = CalculatorFunctions & StackScreenProps<HomeStackParamList, 'Home'>

const Home = ({ navigation, titalize }: Props) => {
    const { colors } = useAppTheme();
    return (
        <MyContainer heading='FinEasy' description='Your personal finance calculator'>
            <View>
                {calculatorData.map((category, ind) => {
                    return (
                        <View key={ind} >
                            <Text variant='titleMedium' style={{ marginBottom: 5 }}>{titalize(category.name)} Calculators</Text>
                            <FlatGrid
                                itemDimension={100}
                                data={category.data}
                                scrollEnabled={false}
                                showsVerticalScrollIndicator={false}
                                // fixed={true}
                                spacing={15}
                                renderItem={({ item }) => (
                                    <CalculatorCard
                                        calculator={item}
                                    />
                                )}
                                additionalRowStyle={{ marginBottom: 0, alignItems: 'flex-start' }}
                            />
                        </View>
                    )
                })}
            </View>
        </MyContainer>
    )
}

export default withCalculatorFunctions(Home)
