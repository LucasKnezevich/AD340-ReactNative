import React from "react";
import { Text, View, Image, StyleSheet } from 'react-native';


const PersonDetail = ({ navigation, route }) => {
  const {person} = route.params;

  // console.log(people[1]);

  return (
    <View style={styles.personDetailContainer}>
      <Image 
        style={styles.personImage}
        resizeMode="contain"
        source={{
          uri: `${person.image}${person.id}`,
        }}
      />
      <Text style={styles.personDetailFieldHeader}>Name</Text>
      <Text style={styles.personDetailFieldBody}>{person.firstname} {person.lastname}</Text>
      <Text style={styles.personDetailFieldHeader}>Username</Text>
      <Text style={styles.personDetailFieldBody}>{person.username}</Text>
      <Text style={styles.personDetailFieldHeader}>Email</Text>
      <Text style={styles.personDetailFieldBody}>{person.email}</Text>
      <Text style={styles.personDetailFieldHeader}>Website</Text>
      <Text style={styles.personDetailFieldBody}>{person.website}</Text>
    </View>
  )
};


const styles = StyleSheet.create({
  personDetailContainer: {
    marginTop: 10,
    alignItems: "center",
    color: '#121212'
  },
  personDetailFieldHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 1,
    color: '#121212'
  },
  personDetailFieldBody: {
    fontSize: 22,
    marginBottom: 20,
    color: '#454444'
  },
  personImage: {
    width: '90%',
    height: 200,
    marginVertical: 20,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default PersonDetail;