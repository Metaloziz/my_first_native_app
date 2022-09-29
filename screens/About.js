import {Text, View, StyleSheet} from "react-native";
import globalStyles from "../styles/global";


export default function About() {

  return (
    <View style={style.container}>
      <Text style={globalStyles.title}>About</Text>
    </View>
  )
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'blue'
  },


})