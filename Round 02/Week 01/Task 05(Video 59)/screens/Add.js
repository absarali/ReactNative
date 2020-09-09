import React, { useState} from 'react'
import { View, StyleSheet, Text} from 'react-native'

const Add = () => {
    const [state, dispatch] = useState(0)
    return(
            <View>
                <Text style = {styles.head}>Use Reducer</Text>
                <Text style = {styles.button} onPress={
                    () => {
                        dispatch(state + 1)
                    }
                }>Increase Counter</Text>
                <Text style = {styles.button} onPress={
                    () => {
                        dispatch(state - 1)
                    }
                }>Decrease Counter</Text>
    <Text style = {styles.text}>Counter Vaue: {state}</Text>
            </View>
    )
};
const styles = StyleSheet.create({
    head: {
        marginBottom: 50,
        textAlign: 'center',
        fontSize: 30
    },
    button: {
        borderRadius: 20,
        borderColor: 'blue',
        padding: 10,
        fontSize: 18,
        color: 'rgb(50,50,255)',
        textAlign: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 16
    }
});
export default Add