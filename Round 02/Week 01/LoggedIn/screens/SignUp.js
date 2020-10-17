import firebase from "firebase";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert, AsyncStorage } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const SignUp = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, CsetPassword] = useState("");
  // save state
  const _storeState = async () => {
    try {
      await AsyncStorage.setItem("LoggedIn", "1");
    } catch (error) {
      console.log("Cant store data to Async Storage");
    }
  };

  return (
    <View style={styles.parent}>
      <Text style={styles.txt}>Create an account</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setUser(value)}
        placeholder={"Username"}
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setEmail(value)}
        placeholder={"Email"}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
        placeholder={"Password"}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(value) => CsetPassword(value)}
        placeholder={"Confirm Password"}
      />
      <View style={styles.flex}>
        <TouchableOpacity
          onPress={() => {
            _storeState()
            navigation.navigate("In");
          }}
        >
          <Text style={styles.option}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (user != null && email != null && password == Cpassword) {
              firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(async () => {
                  await firebase.database().ref("userProfile").set({
                    user: user,
                    email: email,
                  });
                  _storeState();
                  navigation.navigate("Hello");
                })
                .catch((error) => {
                  Alert.alert(
                    "Error",
                    error.toString(),
                    [{ text: "Cancel" }, { text: "Ok" }],
                    { cancelable: false }
                  );
                });
            }
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
  input: {
    margin: 10,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "grey",
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
});
export default SignUp;
