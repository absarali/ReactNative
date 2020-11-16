import React, {useContext, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {TextInput} from 'react-native-gesture-handler';
import {Context as AuthContext} from './context/AuthContext';

const SignupScreen = ({navigation}) => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.main}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Text style={styles.header}>Signup</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessages}>{state.errorMessage}</Text>
      ) : null}
      <TouchableOpacity
        onPress={() => {
          signup({email, password});
        }}
        style={styles.buttonStyle}>
        <Text style={styles.textStyle}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignIn');
        }}>
        <Text style={styles.textButton}>
          Already have an account? Sign in instead
        </Text>
      </TouchableOpacity>
      {/*<TouchableOpacity
        onPress={() => {
          navigation.navigate('mainFlow');
        }}
        style={styles.buttonStyle}>
        <Text style={styles.textStyle}>Main Flow</Text>
      </TouchableOpacity> */}
    </View>
  );
};
SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
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
  input: {
    fontSize: 16,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: 'grey',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  errorMessages: {
    fontSize: 16,
    color: 'red',
  },
  buttonStyle: {
    marginVertical: 10,
    marginHorizontal: 25,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#007aff',
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  textButton: {
    color: '#007aff',
    margin: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
export default SignupScreen;
