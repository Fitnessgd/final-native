import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { loadAsync } from 'expo-font';
import React, { useState } from 'react';
import Store from './components/Store';
import Navigator from './routes/Navigator';
export default function App() {
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
      <Store>
        <Navigator />
      </Store>
    </NavigationContainer>
  )
}
