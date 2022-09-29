import {Text, View, StyleSheet} from "react-native";


export default function About() {

  return (
    <View style={style.container}>
      <Text>About</Text>
    </View>
  )
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'blue'
  }
})