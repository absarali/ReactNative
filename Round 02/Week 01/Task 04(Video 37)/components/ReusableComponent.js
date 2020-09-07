import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

const ReusableComponent = (props) => {
    return(
        <View>
            <Image source={props.path}/>
            <Text style={styles.Text}>{props.name}</Text>
    <Text style={styles.scoreText}>{props.score}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    Text:{
        color: 'white',
        fontSize: 20,
    },
    scoreText:{
        color: 'white',
        fontSize: 16,
    }
})
export default ReusableComponent
