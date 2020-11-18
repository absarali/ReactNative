import React, {useContext} from 'react';
import { TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Context as TrackContext} from './context/TrackContext'
import {NavigationEvents} from 'react-navigation';
import { FlatList } from 'react-native-gesture-handler';

const TrackListScreen = ({navigation}) => {
  const {state, fetchTracks} = useContext(TrackContext)
  
  return (
    <>
    <NavigationEvents onWillFocus={fetchTracks} />
    <FlatList
    data={state}
    keyExtractor={item => item._id}
    renderItem={({item}) => {
      return(
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TrackDetail', {_id: item._id})
          }}
          >
            <Text style={styles.list}>{item.name}</Text>
        </TouchableOpacity>
      )
    }
  }
    />
     </>
  );
};
const styles = StyleSheet.create({
  list: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: 'grey'
  }
});

export default TrackListScreen;
