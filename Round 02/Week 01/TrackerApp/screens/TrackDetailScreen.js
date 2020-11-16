import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Context} from './context/AuthContext';
import {SafeAreaView} from 'react-navigation';
const TrackDetailScreen = () => {
  const {signout} = useContext(Context);
  return (
    <SafeAreaView forceInset={{top: 'always'}} style={styles.main}>
      <Text style={styles.header}>TrackDetailScreen</Text>
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

TrackDetailScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
export default TrackDetailScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    marginVertical: 5,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
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
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
