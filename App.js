import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'


export default function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')


  const changeName = (value) => {
    setName(value)
  }

  const changeAge = (value) => {
    setAge(value)
  }

  const setNewName = () => {
    // setName('')
    // setAge(age)
  }

  return (
    <View style={styles.container}>
      <Text>Name: {name}, Age: {age}</Text>
      <Text>Enter name: </Text>
      <TextInput style={styles.input}
                 multiline
                 value={name}
                 onChangeText={changeName}
                 placeholder={'name'}/>
      <Text>Enter age: </Text>
      <TextInput style={styles.input}
                 keyboardType="numeric"
                 value={age}
                 onChangeText={changeAge}
                 placeholder={'age'}/>
      <Button title={'add'} onPress={setNewName}/>
      <StatusBar style="auto"/>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  },

  input: {
    borderColor: 'green',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    fontWeight: '900',
    fontSize: 30,
    padding: 20,
    width: 200
  }


})
