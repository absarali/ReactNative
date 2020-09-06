import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const ImagesScreen = () => {
    return(
        <View style={styles.parent}>
           <Text style={styles.head}>ImagesScreen</Text> 
        </View>
    );
    }
const styles = StyleSheet.create({
    parent: {
        backgroundColor: 'black',
        flex: 1,
    },
    head: {
        fontSize: 20,
        color: 'white',
        textAlign: "center",
    }
});
export default ImagesScreen;