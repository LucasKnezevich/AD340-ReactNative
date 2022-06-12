import React, { useState, useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';

const People = ({ navigation }) => {

  const [people, setPeople] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/users?_quantity=2')
    .then(response => response.json())
    .then(json => {
      setPeople(json.data)
      console.log(people)
    })
    .catch(error => console.log(error))
    .finally(() => setLoading(false));
  }, []);

  console.log(people)

  return (
    <View style={styles.container}>
      
      {isLoading ? <ActivityIndicator style={styles.activityIndicator} /> : (
        <>
          <Text style={{ margin: 10 }} >{people[0].firstname} {people[0].lastname}  |  {people[0].email}</Text>
          <FlatList 
            style={{ margin: 10, width: 300, borderWidth: 1 }}
            data={people}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              <TouchableOpacity styles={styles.button} title={item.id} onPress={() => navigation.navigate('Person Detail', {person: item})}>
                <Text style={styles.buttonText}>{item.firstname} {item.lastname}</Text>
              </TouchableOpacity>
            }}
          />
        </>
      )}

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Person Detail', {person: people[0]})}>
        <Text style={styles.buttonText}>Person Details</Text>
      </TouchableOpacity>
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
  }
});

export default People;