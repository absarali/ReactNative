import React, {useState} from 'react'
import { View, StyleSheet, Text, TextInput} from 'react-native'
const TextScreen = () =>{
    const [name, setName] = useState('');
    const [final, setFinal] = useState('');
    return(
        <View>
            <Text style= {styles.head}>Inside Text Screen</Text>
            <Text style= {styles.text}>Enter Your Name:</Text>
            <TextInput 
            value = {name}
            onChangeText = {newValue=> setName(newValue)}
            style = {styles.input}
            />
            {name.length<5 ? <Text style = {{color: 'red', textAlign: 'center'}}>
                Username must be atleast 5 characters long
            </Text> : null}
            <Text 
            onPress={
                () => {
                    if(name.length>4){
                        setFinal(name)
                    }
                }
            }
            style= {styles.button}>Next</Text>
            <Text>Your name is: {final}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    head:{
        color: 'white',
        backgroundColor: 'grey',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 20,
    },
    button:{
        fontSize: 24,
        marginRight: 20,
        color: 'darkturquoise',
        textAlign: 'right'
    },
    text:{
        marginHorizontal: 10,
        fontSize: 16,
    },
    input:{
        marginHorizontal: 10,
        fontSize: 14,
        borderColor: 'black',
        borderBottomWidth: 1
    }
})
export default TextScreen