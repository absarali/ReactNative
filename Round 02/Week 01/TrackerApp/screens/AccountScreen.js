import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Context } from "./context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(Context);
  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <TouchableOpacity
        onPress={() => {
          signout();
        }}
        style={styles.buttonStyle}
      >
        <Text style={styles.textStyle}>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#007aff",
    margin: 5,
  },
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10,
  },
});
export default AccountScreen;
