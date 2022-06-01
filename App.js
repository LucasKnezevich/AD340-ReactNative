import React from "react";
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style ={styles.container}>
      <Text style = {styles.title}>AD340 - Lucas Knezevich</Text>
      <Text style = {styles.pageDescription}>
        Here is some information about my app!{"\n"}This app is built using React Native.{"\n"}These buttons will eventually lead to different views.
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
        renderItem = {({item}) => <TouchableOpacity style={styles.button} title={item.key}><Text style={styles.buttonText}>{item.key}</Text></TouchableOpacity>}>

      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#343036',
  },
  title: {
    marginVertical: 40,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  pageDescription: {
    textAlign: 'center',
    marginHorizontal: 10,
    marginBottom: 40,
    fontStyle: 'italic'
  },
  button: {
    marginBottom: 10,
    paddingHorizontal: 50,
    height: 44,
    backgroundColor: '#d685ff',
    borderRadius: 5,
    alignContent: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: '500',
  }
});

export default App;