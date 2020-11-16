import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, PermissionsAndroid} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import MapView, {Polyline} from 'react-native-maps';
import {
  getLatestLocation,
} from 'react-native-location';
import {Context} from './context/AuthContext';
const TrackCreateScreen = () => {
  const {signout} = useContext(Context);
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )
      console.log("Location"+await getLatestLocation())
    } catch (e) {
      console.log(e);
      setErr(e);
    }
  };
  useEffect(() => {
    startWatching();
  }, []);
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 37.33233 + i * 0.001,
      longitude: -122.03121 + i * 0.001,
    });
  }
  return (
    <SafeAreaView forceInset={{top: 'always'}} style={styles.main}>
      <Text style={styles.header}>TrackCreateScreen</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.33233,
          longitude: -122.03121,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Polyline coordinates={points} />
      </MapView>
      {err ? <Text>Please enable location.</Text> : null}
      <TouchableOpacity
        onPress={() => {
          signout();
        }}
        style={styles.buttonStyle}>
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
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  map: {
    height: 300,
  },
});
export default TrackCreateScreen;
