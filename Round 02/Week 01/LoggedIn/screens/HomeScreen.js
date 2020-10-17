import React from "react";
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const HomeScreen = ({ navigation }) => {
  let state = "";
  const checkState = async () => {
    state = await AsyncStorage.getItem("LoggedIn") 
    if(state)
    {
      navigation.navigate("Hello");
    } else {
      //
    }
  };
  checkState()
  return (
    <View style={styles.parent}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("In");
        }}
      >
        <Text style={styles.txt}>Login to account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Up");
        }}
      >
        <Text style={styles.txt}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  txt: {
    margin: 12,
    alignSelf: "center",
    backgroundColor: "#007aff",
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    padding: 10,
    borderRadius: 8,
  },
  parent: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default HomeScreen;
