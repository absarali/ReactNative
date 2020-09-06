import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
const ComponentsScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>ComponentsScreen</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'black',
        flex: 1,
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        color: 'white',
    }

});

export default ComponentsScreen