import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { loadAsync } from 'expo-font';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import Store from './components/Store';
import Colours from './constants/Colours';
import Navigator from './routes/Navigator';
export default function App1() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const fetchFont = () => loadAsync({ "roboto-slab": require("./assets/fonts/RobotoSlab-VariableFont_wght.ttf") })
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setFontLoaded(true)}
        onError={e => console.log(e)}
      />
    )
  }
  return (
    <NavigationContainer>
      <StatusBar style="auto" backgroundColor={Colours.background} />
      <Store>
        <Navigator />
      </Store>
    </NavigationContainer>
  )
}
