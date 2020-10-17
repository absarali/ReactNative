import React from "react";
import { useState } from "react";
import { View, StyleSheet, Text, AsyncStorage } from "react-native";
import firebase from "firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
const Welcome = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  // save state
  const _updateState = async () => {
    try {
      await AsyncStorage.setItem("LoggedIn", "0");
    } catch (error) {
      console.log("Cant update data to Async Storage");
    }
  };
  firebase
    .database()
    .ref("userProfile")
    .once("value",(data) => {
      setEmail(data.val().email);
      setUser(data.val().user);
    });
  return (
    <View style={styles.parent}>
      <View style={styles.header}>
        <Text style={styles.hello}>Welcome {user},</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Edit");
          }}
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textHead}>My Profile:</Text>
      <Text style={styles.text}>Username: {user}</Text>
      <Text style={styles.text}>Email: {email}</Text>
      <TouchableOpacity
        onPress={() => {
          firebase
            .auth()
            .signOut()
            .then(() => {
              _updateState();
              navigation.navigate("In");
            });
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    margin: 5,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hello: {
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 10,
  },
  textHead: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    margin: 5,
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 15,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderColor: "#007aff",
    borderRadius: 8,
    borderWidth: 1,
  },
  buttonText: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10,
  },
});
export default Welcome;
