import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import MapView, { Circle } from "react-native-maps";
import { Context } from "./context/AuthContext";
import { Context as LocationContext } from "./context/LocationContext";
import useLocation from "./hooks/useLocation";
import { TextInput } from "react-native-gesture-handler";
const TrackCreateScreen = ({ isFocused }) => {
  const { signout } = useContext(Context);
  const {
    addLocation,
    state,
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [err] = useLocation(isFocused, location => {
    addLocation(location, state.recording);
  });
  // let points = [];
  // for (let i = 0; i < 20; i++) {
  //   points.push({
  //     latitude: 37.33233 + i * 0.001,
  //     longitude: -122.03121 + i * 0.001,
  //   });
  // }
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.main}>
      <Text style={styles.header}>TrackCreateScreen</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Circle
          center={currentLocation.coords}
          radius={30}
          strokeColor="rgba(158,158,255,1.0)"
          fillColor="rgba(158,158,255,0.3)"
        />
      </MapView>
      {/* <Polyline coordinates={points} /> */}
      {err ? <Text>Please enable location</Text> : null}
      <TextInput
        placeholder="Enter name of your Track"
        value={state.name}
        onChangeText={changeName}
      />
      {recording ? (
        <TouchableOpacity
          onPress={() => {
            stopRecording();
          }}
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>Stop Recording</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            startRecording();
          }}
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>Start Recording</Text>
        </TouchableOpacity>
      )}

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
TrackCreateScreen.navigationOptions = () => {
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
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonStyle: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  map: {
    height: 300,
  },
});
export default TrackCreateScreen;
