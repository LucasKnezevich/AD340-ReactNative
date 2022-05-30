import React from "react";
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style ={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style = {styles.title}>AD340 - Lucas Knezevich</Text>
      <Text style = {styles.pageDescription}>
        Here is some information about my app!{"\n"}This app is built using React Native.{"\n"}These buttons will lead you to different views.
      </Text>
      <FlatList
        data={[
          {key: 'Button 1'},
          {key: 'Button 2'},
          {key: 'Button 3'},
          {key: 'Button 4'},
          {key: 'Button 5'},
          {key: 'Button 6'},
        ]} 
        renderItem = {({item}) => <TouchableOpacity style={styles.button} title={item.key} ><Text>{item.key}</Text></TouchableOpacity>}>

      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  pageDescription: {
    textAlign: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    fontStyle: 'italic'
  },
  button: {
    marginBottom: 10,
    padding: 10,
    height: 44,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  }
});

export default App;