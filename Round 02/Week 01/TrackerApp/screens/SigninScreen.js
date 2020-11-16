import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {NavigationEvents} from 'react-navigation';
import {Context} from './context/AuthContext';

const SigninScreen = ({navigation}) => {
  const {state, signin, clearErrorMessage} = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.main}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <Text style={styles.header}>Signin</Text>
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
          signin({email, password});
        }}
        style={styles.buttonStyle}>
        <Text style={styles.textStyle}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        <Text style={styles.textButton}>
          Don't have an account? Sign up here
        </Text>
      </TouchableOpacity>
    </View>
  );
};
SigninScreen.navigationOptions = () => {
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
export default SigninScreen;
