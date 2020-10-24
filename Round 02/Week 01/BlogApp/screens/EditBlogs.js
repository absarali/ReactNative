import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Context} from '../context/BlogContext';
const EditBlogs = ({navigation}) => {
  const {state, editBlogPost} = useContext(Context);
  const id = navigation.getParam('id');
  const blogPosts = state.find((blogPosts) => blogPosts.id === id);
  const [title, setTitle] = useState(blogPosts.title);
  const [content, setContent] = useState(blogPosts.content);
  return (
    <View>
      <Text style={styles.txt}>Edit Blog</Text>
      <TextInput
        style={styles.inputField}
        placeholder={'Blog Title'}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder={'Blog Content'}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <TouchableOpacity
        onPress={() =>
          editBlogPost(id, title, content, () => {
            navigation.navigate('Home');
          })
        }>
        <Text style={styles.button}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  txt: {
    margin: 5,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputField: {
    borderRadius: 5,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginHorizontal: 5,
    padding: 10,
  },
  button: {
    fontSize: 20,
    padding: 5,
    borderWidth: 1,
    textAlign: 'center',
    borderColor: 'grey',
    color: 'white',
    backgroundColor: '#007aff',
    margin: 10,
  },
});

export default EditBlogs;
