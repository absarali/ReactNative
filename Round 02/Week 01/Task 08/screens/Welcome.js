import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import firebase from 'firebase'
const Welcome = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.hello}>Welcome!</Text>
            <Text style={styles.button}
                onPress={() => {
                    firebase.auth().signOut()
                        .then(() => navigation.navigate('In'))
                }}
            >Logout</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    hello: {
        fontSize: 18,
        fontWeight: "bold"
    },
    button: {
        margin: 10,
        borderRadius: 7,
        paddingHorizontal: 22,
        paddingVertical: 10,
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'blue',
        fontSize: 16,
    }
})
export default Welcome