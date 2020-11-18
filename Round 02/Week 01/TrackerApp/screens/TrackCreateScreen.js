import React, { useContext, useCallback } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import MapView, { Circle, Polyline } from "react-native-maps";
import { Context as LocationContext } from "./context/LocationContext";
import useLocation from "./hooks/useLocation";
import { TextInput } from "react-native-gesture-handler";
import useSaveTrack from "./hooks/useSaveTrack";
const TrackCreateScreen = ({ isFocused }) => {
  const {
    addLocation,
    state: { recording, currentLocation, name, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();
  const callback = useCallback(
    async (location) => {
      await addLocation(location, recording);
    },
    [recording]
  );
  const [err] = useLocation(isFocused || recording, callback);
  // let points = [];
  // for (let i = 0; i < 20; i++) {
  //   points.push({
  //     latitude: 37.33233 + i * 0.001,
  //     longitude: -122.03121 + i * 0.001,
  //   });
  // }
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.main}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.33233, 
          longitude: -122.03121,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          latitude: 37.33233, 
          longitude: -122.03121,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Circle
          center={{latitude: 37.33233, longitude: -122.03121}}
          radius={30}
          strokeColor="rgba(158,158,255,1.0)"
          fillColor="rgba(158,158,255,0.3)"
        />
        <Polyline coordinates={locations.map((loc) => loc.coords)} />
      </MapView>
      {err ? <Text>Please enable location</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Enter name of your Track"
        value={name}
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
      {!recording && locations.length ? (
        <TouchableOpacity
          onPress={() => {
            saveTrack();
          }}
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>Save Recording</Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
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
    margin: 5,
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
  input: {
    margin: 10,
  },
});
export default withNavigationFocus(TrackCreateScreen);
