import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Store from './components/Store';
import Navigator from './routes/Navigator';
export default function App() {
  return (
    <NavigationContainer>
      <Store>
        <Navigator />
      </Store>
    </NavigationContainer>
  )
}
