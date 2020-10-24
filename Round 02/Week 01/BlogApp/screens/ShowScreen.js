import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Context} from '../context/BlogContext';

const ShowScreen = ({navigation}) => {
  const {state} = useContext(Context);
  const blogPosts = state.find(
    (blogPosts) => blogPosts.id === navigation.getParam('id'),
  );
  return (
    <View>
      <Text style={styles.txt}>Blog Show Screen</Text>
      <Text style={styles.heading}>Blog Title</Text>
      <Text style={styles.child}>{blogPosts.title}</Text>
      <Text style={styles.heading}>Blog Content</Text>
      <Text style={styles.child}>{blogPosts.content}</Text>
    </View>
  );
};
ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('EditScreen', {id: navigation.getParam('id')})
        }>
        <Text>Edit Blog</Text>
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  txt: {
    margin: 5,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10
  },
  child: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 5,
    paddingVertical: 10,
    fontSize: 14,
    margin: 10
  }

});
export default ShowScreen;
