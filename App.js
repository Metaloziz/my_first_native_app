import {StatusBar} from 'expo-status-bar'
import {useState} from 'react'
import {
  Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View
} from 'react-native'


export default function App() {

  const [people, setPeople] = useState([
    {name: '1', id: '1'},
    {name: '2', id: '2'},
    {name: '3', id: '3'},
    {name: '4', id: '4'},
    {name: '5', id: '5'},
    {name: '6', id: '6'},
    {name: '7', id: '7'},
  ])


  return (<View style={styles.container}>

    <FlatList data={people}
              numColumns={3}
              keyExtractor={(item) => item.id}
              renderItem={
                ({item}) => <Text style={styles.item}>{item.name}</Text>
              }
    />

    {/*<ScrollView>*/}
    {/*{people.map((el) =>*/}
    {/*  <View key={el.key}><Text style={styles.item}>{el.name}</Text></View>)}*/}
    {/*</ScrollView>*/}
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,

    // alignItems: 'center',
    // justifyContent: 'center',
  },

  item: {
    marginTop: 25,
    padding: 30,
    backgroundColor: 'green',
    fontSize: 20,
    marginHorizontal: 10
  }


})
