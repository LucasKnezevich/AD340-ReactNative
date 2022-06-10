import React, { useState, useEffect } from "react";
import { Text, View, Image, FlatList, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
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
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('People')}><Text style={styles.buttonText}>People</Text></TouchableOpacity>
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
          <TouchableOpacity style={styles.button} title={item.key} onPress={() => Alert.alert("\"" + item.key + "\"" + " button pressed.")}>
            <Text style={styles.buttonText}>{item.key}</Text>
          </TouchableOpacity>}>

      </FlatList>
    </View>
  )
};



const People = ({ navigation }) => {

  const [people, setPeople] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/users?_quantity=10')
    .then(response => response.json())
    .then(json => {
      setPeople(json.data)
      console.log(people)
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => setLoading(false));
    
  }, []);

  return (
    <View style={styles.container}>
      
      {isLoading ? <ActivityIndicator style={styles.activityIndicator} /> : (
        <>
          <Text style={{ margin: 10 }}>{people[0].firstname} {people[0].lastname}  |  {people[0].email}</Text>
          <FlatList
            style={{ margin: 10, width: 300, borderWidth: 1 }}
            data={people}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              <Text style={{ padding: 50, borderWidth: 1 }}>{item.email}</Text>
            }}
          />
        </>
      )}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Person Detail', {people})}><Text style={styles.buttonText}>Person Details</Text></TouchableOpacity>
    </View>
  )
};



const PersonDetail = ({ navigation, route }) => {
  const {people} = route.params;

  console.log(people[1]);

  return (
    <View style={styles.personDetailContainer}>
      <Image 
        style={styles.personImage}
        resizeMode="contain"
        source={{
          uri: `${people[0].image}${people[0].id}`,
        }}
      />
      <Text style={styles.personDetailFieldHeader}>Name</Text>
      <Text style={styles.personDetailFieldBody}>{people[0].firstname} {people[0].lastname}</Text>
      <Text style={styles.personDetailFieldHeader}>Username</Text>
      <Text style={styles.personDetailFieldBody}>{people[0].username}</Text>
      <Text style={styles.personDetailFieldHeader}>Email</Text>
      <Text style={styles.personDetailFieldBody}>{people[0].email}</Text>
      <Text style={styles.personDetailFieldHeader}>Website</Text>
      <Text style={styles.personDetailFieldBody}>{people[0].website}</Text>
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
    marginHorizontal: 10,
    marginBottom: 40,
    fontStyle: 'italic'
  },
  button: {
    marginBottom: 10,
    paddingHorizontal: 50,
    // width: '80%',
    height: 44,
    backgroundColor: '#d685ff',
    borderRadius: 5,
    alignContent: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: '500',
    textAlign: "center"
  },
  activityIndicator: {
    margin: 50,
  },
  personDetailContainer: {
    marginTop: 10,
    alignItems: "center"
  },
  personDetailFieldHeader: {
    fontWeight: 'bold',
    marginBottom: 1,
    textAlign: "center"
  },
  personDetailFieldBody: {
    marginBottom: 20,
    textAlign: "center"
  },
  personImage: {
    width: '90%',
    height: 200,
    marginVertical: 20
  }
});

export default App;