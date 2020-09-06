import React, { useState, cloneElement } from 'react';
import { StyleSheet, Text, View, Button, FlatList,  } from 'react-native';


export default function App() {
  const nameList = [
    {name: 'Friend# 01', age: 20},
    {name: 'Friend# 02', age: 16},
    {name: 'Friend# 03', age: 21},
    {name: 'Friend# 04', age: 26},
    {name: 'Friend# 05', age: 23},
    {name: 'Friend# 06', age: 30},
    {name: 'Friend# 07', age: 19},
    {name: 'Friend# 08', age: 25},
    {name: 'Friend# 09' , age: 20},
    {name: 'Friend# 10', age: 22},
    {name: 'Friend# 11', age: 21},
    {name: 'Friend# 12', age: 27},
    {name: 'Friend# 13', age: 23},
    {name: 'Friend# 14', age: 18},
    {name: 'Friend# 15', age: 22},
    {name: 'Friend# 16', age: 21},
    {name: 'Friend# 17', age: 17},
    {name: 'Friend# 18', age: 20},
    {name: 'Friend# 19', age: 21},
    {name: 'Friend# 20', age: 16},
    {name: 'Friend# 21', age: 23},
    {name: 'Friend# 22', age: 30},
    {name: 'Friend# 23', age: 19},
    {name: 'Friend# 24', age: 25},
    {name: 'Friend# 25', age: 20},
    {name: 'Friend# 26', age: 21},
    {name: 'Friend# 27', age: 27},
    {name: 'Friend# 28', age: 23},
    {name: 'Friend# 29', age: 18},
    {name: 'Friend# 30', age: 22},
    {name: 'Friend# 31', age: 21},
    {name: 'Friend# 32', age: 17},
    {name: 'Friend# 33', age: 20},
    {name: 'Friend# 34', age: 21},
    {name: 'Friend# 35', age: 16},
    {name: 'Friend# 36', age: 23},
    {name: 'Friend# 37', age: 30},
    {name: 'Friend# 38', age: 19},
    {name: 'Friend# 39', age: 17},
    {name: 'Friend# 40', age: 16},
    {name: 'Friend# 41', age: 15},
    {name: 'Friend# 42', age: 26},
    {name: 'Friend# 43', age: 23},
    {name: 'Friend# 44', age: 21},
    {name: 'Friend# 45', age: 20},
    {name: 'Friend# 46', age: 18},
    {name: 'Friend# 47', age: 15},
    {name: 'Friend# 48', age: 21},
    {name: 'Friend# 49', age: 23},
    {name: 'Friend# 50', age: 20},
  ]
  return (
   <View style={styles.main}>
     <FlatList 
     keyExtractor= {nameList=>nameList.name}
     data = {nameList}
     renderItem = {
      ({item}) => {
      return <Text style={styles.list}>{item.name}   Age: {item.age}</Text>
      }
     }
     />
   </View>
  );
}

// styles
const styles = StyleSheet.create({
  main: {
    marginTop: 30,
    flex: 1,
    backgroundColor: 'grey',
  },
  list: {
    fontSize: 20,
    color: 'white'
  }
});