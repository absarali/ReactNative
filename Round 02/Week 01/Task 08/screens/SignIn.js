import firebase from 'firebase'
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.parent}>
            <Text style={styles.txt}>Sign In</Text>

            <TextInput style={styles.inputEmail}
                placeholder={'Email'}
                onChangeText={value => setEmail(value)}
            />

            <TextInput style={styles.inputPassword}
                secureTextEntry={true}
                placeholder={'Password'}
                onChangeText={value => setPassword(value)} />

            <View style={styles.flex}>

                <Text
                    onPress={
                        () => {
                            navigation.navigate('Up')
                        }
                    }
                    style={styles.option}>Create Account</Text>


                <Text
                    onPress={
                        () => {
                            firebase.auth().signInWithEmailAndPassword(email, password)
                                .then(() => { navigation.navigate('Hello'), setErrors('') })
                                .catch((error) => {
                                    Alert.alert(
                                        "Error",
                                        error.toString(), [
                                        { text: "Cancel" },
                                        { text: "Ok" }
                                    ], {
                                        cancelable: false
                                    }
                                    )
                                }
                                )
                        }
                    }
                    style={styles.button}>Next</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10
    },
    txt: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    flex: {
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between'
    },
    option: {
        paddingVertical: 10,
        color: 'blue',
        fontSize: 16,
        fontWeight: "bold"
    },
    button: {
        borderRadius: 7,
        paddingHorizontal: 22,
        paddingVertical: 10,
        fontWeight: "bold",
        color: 'white',
        backgroundColor: 'blue',
        fontSize: 16,
    },
    inputEmail: {
        margin: 10,
        padding: 12,
        borderColor: 'grey',
        borderWidth: 1,
        fontSize: 16,
        borderRadius: 7,
    },
    inputPassword: {
        margin: 10,
        padding: 12,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'grey'
    },
})
export default SignIn
