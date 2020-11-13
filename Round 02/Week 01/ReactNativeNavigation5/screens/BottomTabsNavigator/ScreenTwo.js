import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ScreenTwo = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.header}>React Navigation 5</Text>
      <Text style={styles.text}>Tab Navigation Screen Two</Text>
    </View>
  );
};

export default ScreenTwo;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
