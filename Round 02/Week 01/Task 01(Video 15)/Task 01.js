import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
let name = "Absar"
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.firstElement}>Getting started with React Native!</Text>
      <Text style={styles.secondElement}>My name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  firstElement: {
    color: 'white',
    fontSize: 45,
  },
  secondElement: {
    color: 'white',
    fontSize: 20,
  },
});