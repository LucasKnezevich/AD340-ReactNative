import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AD340 - Lucas Knezevich</Text>
      <Text style={styles.pageDescription}>
        Here is some information about my app!{"\n"}This app is built using React Native.{"\n"}Some of these buttons lead to stuff.
      </Text>
      <FlatList
        data={[
          { key: 'People' },
          { key: 'Button 2' },
          { key: 'Button 3' },
          { key: 'Button 4' },
          { key: 'Button 5' },
          { key: 'Button 6' },
        ]}
        keyExtractor={item => item.key}
        renderItem={({ item }) =>
          <TouchableOpacity style={styles.button} title={item.key} onPress={() => item.key == 'People' ? navigation.navigate('People') : Alert.alert("\"" + item.key + "\"" + " button pressed.")}>
            <Text style={styles.buttonText}>{item.key}</Text>
          </TouchableOpacity>}>
      </FlatList>
    </View>
  )
};

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
    fontSize: 20,
    marginHorizontal: 10,
    marginBottom: 40,
    fontStyle: 'italic'
  },
  button: {
    marginBottom: 10,
    paddingHorizontal: 50,
    // width: '80%',
    // height: 44,
    backgroundColor: '#d685ff',
    borderRadius: 5,
    alignContent: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    margin: 16,
    fontSize: 30,
    fontWeight: '500',
    textAlign: "center"
  },
  activityIndicator: {
    margin: 50,
  },
});

export default HomeScreen;