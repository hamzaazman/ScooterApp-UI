import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

import HomeStack from './src/navigator/Navigation'

export default function App() {
  return (
    <>
    <StatusBar style={'light'}/>
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
    </>
  );
}

