import {FlatList, StyleSheet, Text, View} from 'react-native'
import {useState} from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import ReviewDetails from "./screens/ReviewDetails";


export default function App() {


  return (
    <View style={style.container}>
      <Home/>
      <About/>
      <ReviewDetails/>
    </View>)
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
})

