import firebase from 'firebase'
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('Invalid username or password')
    const signupError = () => {
        Alert.alert(
            "Error",
            errors,
            [
                { text: "Cancel" },
                { text: "Ok" },
            ],
            { cancelable: false }
        )
    }
    return (
        <View style={styles.parent}>
            <Text style={styles.txt}>Create an account</Text>
            <TextInput style={styles.input}
                onChangeText={value => setEmail(value)}
                placeholder={'Email'}
            />
            <TextInput style={styles.input}
                secureTextEntry={true}
                onChangeText={value => setPassword(value)}
                placeholder={'Password'}
            />
            <View style={styles.flex}>
                <Text
                    onPress={
                        () => {
                            navigation.navigate('In')
                        }
                    }
                    style={styles.option}>Sign In</Text>
                <Text
                    onPress={
                        () => {
                            firebase.auth().createUserWithEmailAndPassword(email, password)
                                .then(() => navigation.navigate('Hello'))
                                .catch((error) => setErrors(error.toString()), signupError(errors))
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
    input: {
        margin: 10,
        padding: 12,
        fontSize: 16,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'grey'
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
        color: 'white',
        backgroundColor: 'blue',
        fontSize: 16,
    },
})
export default SignUp
