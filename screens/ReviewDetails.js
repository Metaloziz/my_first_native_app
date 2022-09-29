import {Text, View, StyleSheet} from "react-native";


export default function ReviewDetails() {

  return (
    <View style={style.container}>
      <Text>ReviewDetails</Text>
    </View>
  )
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'yellow'
  }
})