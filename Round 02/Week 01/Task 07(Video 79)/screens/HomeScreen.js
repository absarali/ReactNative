import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
const HomeScreen = ({navigation}) =>{ 
    return(
        <View style = {styles.parent} >
            <Text style = {styles.button} onPress = {
                () =>{
                    navigation.navigate('TxtInput')
                }
            }>Go to Text Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    parent:{
        flex: 1,
        justifyContent: 'center'
    },
    button:{
        textAlign: 'center',
        fontSize: 18,
        color: 'darkturquoise'
    }
})
export default HomeScreen