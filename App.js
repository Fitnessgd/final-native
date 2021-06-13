import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './models/GlobalStyle';
import Navigator from './navigation/Navigator';
export default function App() {
  return <Navigator />
}