import React, { useState, useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';

const People = ({ navigation }) => {

  const [people, setPeople] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const[testData, setTestData] = useState([]);

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/users?_quantity=50')
    .then(response => response.json())
    .then(json => {
      setPeople(json.data)
      setTestData(json)
      console.log(people)
      console.log(testData)
    })
    .catch(error => console.log(error))
    .finally(() => setLoading(false));
  }, []);

  console.log(people)

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator style={styles.activityIndicator} /> : (
          <FlatList 
          style={styles.peopleList}
            data={people}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => 
              <TouchableOpacity styles={styles.person} title={item.id} onPress={() => navigation.navigate('Person Detail', {person: item})}>
                <Text style={styles.personText}>{item.firstname} {item.lastname}</Text>
              </TouchableOpacity>
            }
          />
      )}
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
  peopleList: {
    margin: 10,
    width: '99%'
  },
  person: {
    marginBottom: 10,
    paddingHorizontal: 50,
    // width: '80%',
    height: 44,
    backgroundColor: '#d685ff',
    borderRadius: 5,
    alignContent: 'center',
    justifyContent: 'center'
  },
  personText: {
    margin: 4,
    fontWeight: '500',
    fontSize: 26,
    textAlign: "center",
    color: '#121212'
  },
  activityIndicator: {
    margin: 50,
  }
});

export default People;