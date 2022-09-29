import {FlatList, StyleSheet, Text, View} from 'react-native'
import {useCallback, useEffect, useState} from "react";
import * as Font from 'expo-font'
import Home from "./screens/Home";
import About from "./screens/About";
import ReviewDetails from "./screens/ReviewDetails";
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';


const getFonts = () => Font.loadAsync({
  'JosefinSans-Regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
  'JosefinSans-Bold': require('./assets/fonts/JosefinSans-Bold.ttf')
})

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  if (appIsReady) {
    return (
      <View style={style.container}>
        <Home/>
        <About/>
        <ReviewDetails/>
      </View>)

  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setAppIsReady(true)}
        onError={console.warn}
      />
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})

