import { StyleSheet, Text, View } from 'react-native';
import React,{useEffect} from 'react';
import AppNavigations from './src/navigations/AppNavigations';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font';

export default function App() {
  const [fonstLoaded] = useFonts({
    "Avenir": require("./assets/fonts/Avenir-Font/avenir_ff/AvenirLTStd-Book.otf")
  })
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync()
    }
    prepare()
  }, [])
  
  if (!fonstLoaded){
    return undefined
  } else {
    SplashScreen.hideAsync()
  }

  return (
    <NavigationContainer>
      <AppNavigations />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
