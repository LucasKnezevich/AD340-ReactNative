import React from "react";
import { Text, View, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react/cjs/react.production.min";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="People" component={People} />
        <Stack.Screen name="Person Detail" component={PersonDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


// VIEWS
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>AD340 - Lucas Knezevich</Text>
        <Text style={styles.pageDescription}>
          Here is some information about my app!{"\n"}This app is built using React Native.{"\n"}Some of these buttons lead to stuff.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('People')}><Text>People</Text></TouchableOpacity>
        <FlatList
          data={[
            { key: 'People' },
            { key: 'Button 2' },
            { key: 'Button 3' },
            { key: 'Button 4' },
            { key: 'Button 5' },
            { key: 'Button 6' },
          ]}
          renderItem={({ item }) => <TouchableOpacity style={styles.button} title={item.key} onPress={() => Alert.alert("\"" + item.key + "\"" + " button pressed.")}>
            <Text style={styles.buttonText}>{item.key}</Text>
          </TouchableOpacity>}>

        </FlatList>
      </View>
  )
};

const People = ({ navigation }) => {

  const people = getPeopleData();
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Person Detail')}><Text style={styles.buttonText}>Person Details</Text></TouchableOpacity>
    </View>
  )
};

const PersonDetail = ({ navigation }) => {
  return (
    <View>

    </View>
  )
};


const getPeopleData = () => {
  return fetch('https://fakerapi.it/api/v1/users?_quantity=10')
    .then((response) => response.json())
    .then((json) => { return json.data; })
    .catch((error) => { console.log(error); })
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
    textAlign: "center"
  }
});

export default App;