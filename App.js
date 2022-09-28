import {FlatList, StyleSheet, Text, View} from 'react-native'
import {useState} from "react";
import Header from "./components/Header";


export default function App() {

  const [todos, setTodos] = useState([
    {text: '1', key: '1'},
    {text: '2', key: '2'},
    {text: '3', key: '3'},

  ])

  return (
    <View style={styles.container}>
      <Header/>
      {/*header*/}
      <View style={styles.content}>
        {/*to form*/}

        <View style={styles.list}>

          <FlatList data={todos} renderItem={
            ({item}) => <Text style={styles.item}>{item.text}</Text>
          }/>

        </View>


      </View>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20
  },

  list: {},

  item: {
    margin: 10,
    padding: 10,
    backgroundColor: 'pink'
  }
})
