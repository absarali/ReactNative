import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const IndexScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.header}>React Navigation 5</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.push('StackScreenOne');
        }}>
        <Text style={styles.textStyle}>Screen 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.push('StackScreenTwo');
        }}>
        <Text style={styles.textStyle}>Screen 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.push('StackScreenThree');
        }}>
        <Text style={styles.textStyle}>Screen 3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    flex: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#007aff',
    margin: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
