import React from 'react'
import { View, StyleSheet, Text, Button} from 'react-native'

const HomeScreen = ({
    navigation
}) => {
    return(
    <View style={styles.screen}>
    <Text style={styles.text}>HomeScreen</Text>
    <Button  style={styles.button}
    title= "Components Screen"
    onPress ={ () => navigation.navigate('Components')}
    />
    <Button  style={styles.button}
    title= "Images Screen"
    onPress ={ () => navigation.navigate('ImgScreen')}
    />
    </View>
    );}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'black'
    },
    text: {
        textAlign: "center",
        color: 'white',
        fontSize: 20,
        marginBottom: 20
    }
});
export default HomeScreen;