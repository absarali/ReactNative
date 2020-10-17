import firebase from "firebase";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  AsyncStorage,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // save state
  const _storeState = async () => {
    try {
      await AsyncStorage.setItem("LoggedIn", "1")
    } catch (error) {
      // error saving data to async storage
    }
  };

  return (
    <View style={styles.parent}>
      <Text style={styles.txt}>Sign In</Text>

      <TextInput
        style={styles.inputEmail}
        placeholder={"Email"}
        onChangeText={(value) => setEmail(value)}
      />

      <TextInput
        style={styles.inputPassword}
        secureTextEntry={true}
        placeholder={"Password"}
        onChangeText={(value) => setPassword(value)}
      />

      <View style={styles.flex}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Up");
          }}
        >
          <Text style={styles.option}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then(() => {
                _storeState()
                navigation.navigate("Hello");
              })
              .catch((error) => {
                Alert.alert(
                  "Error",
                  error.toString(),
                  [{ text: "Cancel" }, { text: "Ok" }],
                  {
                    cancelable: false,
                  }
                );
              });
          }}
        >
          <Text style={styles.button}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  txt: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  flex: {
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-between",
  },
  option: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: "#007aff",
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  inputEmail: {
    margin: 10,
    padding: 12,
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 16,
    borderRadius: 7,
  },
  inputPassword: {
    margin: 10,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "grey",
  },
});
export default SignIn;
