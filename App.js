import React, { useState, useEffect } from "react";
import HomeScreen from "./views/HomeScreen";
import People from "./views/People";
import PersonDetail from "./views/PersonDetail";
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

export default App;