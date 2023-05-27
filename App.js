import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Signin from './pages/Signin';

export default function App() {
  return (
    <View>
      <Signin/>
      <StatusBar style='light'/>
    </View>
  );
}