import {Text, View, StyleSheet} from "react-native";


export default function Home() {

  return (
    <View style={style.container}>
      <Text style={style.title}>Home</Text>
    </View>
  )
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'green'
  },

  title: {
    fontFamily: 'JosefinSans-Regular',
    // fontFamily: 'JosefinSans-Bold',
    fontSize: 50
  }
})