import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'


export default function App() {

  const [people, setPeople] = useState([{ name: '1', key: '1' }, {
    name: '2',
    key: '2'
  }, { name: '3', key: '3' }, { name: '4', key: '4' }, {
    name: '5',
    key: '5'
  }, { name: '6', key: '6' }, { name: '7', key: '7' },])


  return (<View style={styles.container}>
    <ScrollView>
      {people.map((el) =>
        <View key={el.key}><Text style={styles.item}>{el.name}</Text></View>)}
    </ScrollView>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', paddingTop: 40, paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  item: {
    marginTop: 25, padding: 30, backgroundColor: 'green', fontSize: 20
  }


})
