import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const StackScreenOne = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.header}>React Navigation 5</Text>
      <Text style={styles.text}>Stack Navigation Screen One</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.push('IndexScreen');
        }}>
        <Text style={styles.textStyle}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StackScreenOne;

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
