import {Text, View, StyleSheet} from "react-native";

export default function Header() {
  return (<View>
      <Text style={style.container}>TODO_LIST</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 20,
    fontSize: 20,
    fontWeight: '800',
    backgroundColor: 'green'
  }
})