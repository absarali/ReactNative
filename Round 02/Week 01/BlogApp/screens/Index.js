import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Context} from '../context/BlogContext';
const Index = ({navigation}) => {
  const {state, deleteBlogPost} = useContext(Context);
  return (
    <View style = {styles.parent}>
      <Text style={styles.txt}>My Blogs</Text>
      <FlatList
        data={state}
        keyExtractor={(blogPosts) => blogPosts.title}
        renderItem={({item}) => {
          return (
            <View style={styles.row}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ShowScreen', {id: item.id})
                }>
                <Text style={styles.title}>{item.title}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  deleteBlogPost(item.id);
                }}>
                <Text style={styles.icon}>Trash</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
Index.navigationOptions = ({navigation}) => {
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('CreateScreen')}>
        <Text>Create Blog</Text>
      </TouchableOpacity>
    ),
  };
};
export default Index;

const styles = StyleSheet.create({
  parent: {
    marginHorizontal: 8
  },
  txt: {
    margin: 5,
    marginBottom: 15,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 18,
    color: '#007aff',
    marginHorizontal: 5,
  },
});
