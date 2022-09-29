import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const PERSON = {
  name: 'John', sex: 'male'
}

export default function App() {

  const [name, setName] = useState('default')
  const [person, setPerson] = useState(PERSON)

  const changeName = () => {
    setName(Date.now().toString())
    setPerson({ name: 'Ed', sex: 'girl' })
    alert('done')
  }

  return (<View style={styles.container}>
    <View style={styles.body}>
      <Text>{person.name} and {person.sex}</Text>
      <Text>{name}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button title={'add'} onPress={changeName}/>
    </View>
    <StatusBar style="auto"/>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  },

  buttonContainer: {
    marginTop: 20,
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: 'pink',
    padding: 20
  },
})
