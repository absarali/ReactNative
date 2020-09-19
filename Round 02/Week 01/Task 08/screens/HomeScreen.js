import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.parent}>
            <Text
                onPress={
                    () => {
                        navigation.navigate('In')
                    }
                }
                style={styles.txt}>Login to account
            </Text>
            <Text
                onPress={
                    () => {
                        navigation.navigate('Up')
                    }
                }
                style={styles.txt}>Create an account
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    txt: {
        padding: 15,
        margin: 12,
        elevation: 2,
        backgroundColor: 'blue',
        elevation: 5,
        color: 'white',
        fontSize: 20,
    },
    parent: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default HomeScreen
