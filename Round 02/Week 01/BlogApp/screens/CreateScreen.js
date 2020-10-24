import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Context} from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addBlogPost} = useContext(Context);
  return (
    <View>
      <Text style={styles.txt}>Create Blog</Text>
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
          addBlogPost(title, content, () => {
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

export default CreateScreen;
