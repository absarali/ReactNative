import React from 'react'
import { View, StyleSheet, Text, Button} from 'react-native'
import ReusableComponent from './components/ReusableComponent'

const HomeScreen = ({
    navigation
}) => {
    return(
    <View style={styles.screen}>
        <ReusableComponent path={require('../Practice/images/beach.jpg')} name='Beach' score='Image score: 12'></ReusableComponent>
        <ReusableComponent path={require('../Practice/images/mountain.jpg')} name='Mountain' score='Image score: 09'></ReusableComponent>
        <ReusableComponent path={require('../Practice/images/forest.jpg')} name='Forest' score='Image score: 14'></ReusableComponent>
    </View>
    );}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'black'
    }
})
export default HomeScreen