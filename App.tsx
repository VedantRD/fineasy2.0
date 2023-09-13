import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { useAppTheme } from './src/theme/AppTheme';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/home/Home';
import MainNav from './src/navigation/MainNav';

function App(): JSX.Element {
  const { colors } = useAppTheme();
  return (
    <MainNav />
  );
}

const styles = StyleSheet.create({

});

export default App;
