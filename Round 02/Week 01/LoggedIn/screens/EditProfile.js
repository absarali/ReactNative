import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase";
const EditProfile = ({ navigation }) => {
  const [user, setUser] = useState("");
  return (
    <View>
      <TextInput
        style={styles.edit}
        placeholder={"Username"}
        onChangeText={(value) => setUser(value)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (user != "") {
            firebase
              .database()
              .ref(firebase.auth().getUid())
              .update({
                user: user,
              })
              .then(() => navigation.navigate("Hello"))
              .catch((error) => {
                console.log(error);
              });
          }
        }}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;
const styles = StyleSheet.create({
  edit: {
    margin: 10,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "grey",
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
