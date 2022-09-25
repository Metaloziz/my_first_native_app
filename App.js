import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (<View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.boldText}>Hello world ! From iOS</Text>
    </View>
    <View style={styles.body}>
      <Text style={styles.boldText}>Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Alias commodi
        consequuntur <Text>distinctio esse explicabo fugiat illum ipsum iste laborum
          laudantium</Text>
        nam nesciunt nihil, quasi qui ratione, repudiandae tempore vero
        voluptatibus.</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi
        consequuntur distinctio esse explicabo fugiat illum ipsum iste laborum laudantium
        nam nesciunt nihil, quasi qui ratione, repudiandae tempore vero
        voluptatibus.</Text>
    </View>
    <StatusBar style="auto"/>
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  }, header: {
    backgroundColor: 'pink', padding: 20,
  },

  boldText: {
    fontWeight: 'bold'
  },

  body: {
    backgroundColor: 'yellow', padding: 20,

  }

});
