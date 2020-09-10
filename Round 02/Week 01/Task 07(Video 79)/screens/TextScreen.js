import React from 'react'
import { View, StyleSheet} from 'react-native'
const TextScreen = ()=>{
    return(
        <View style = {styles.parent}>
            <View style = {styles.childOne}></View>
            <View style = {styles.childTwo}></View>
            <View style = {styles.childThree}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    parent:{
        flex: 1,
        display: "flex",
        position: 'absolute',
        flexDirection: "row"
    },
    childOne:{
        flex: 1,
        backgroundColor: 'orange',
        width: 50,
        height: 100,
        alignSelf: 'flex-start'
    },
    childTwo:{
        backgroundColor: 'lightgreen',
        flex: 1,
        width: 50,
        height: 100,
        alignSelf: 'center',
        top: 100
    },
    childThree:{
        backgroundColor: 'lightblue',
        flex: 1,
        width: 50,
        height: 100,
        alignSelf: 'flex-end'
    }
});
export default TextScreen