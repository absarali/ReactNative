import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Context} from './context/AuthContext';
import {SafeAreaView} from 'react-navigation';

const AccountScreen = () => {
  const {signout} = useContext(Context);
  return (
    <SafeAreaView forceInset={{top: 'always'}} style={styles.main}>
      <Text style={styles.header}>AccountScreen</Text>
      <TouchableOpacity
        onPress={() => {
          signout();
        }}
        style={styles.buttonStyle}>
        <Text style={styles.textStyle}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  header: {
    marginVertical: 5,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
