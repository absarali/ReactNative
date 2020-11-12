import React from 'react'
import { StyleSheet , View } from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.constainerStyle}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    constainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginHorizontal: 5,
        marginVertical: 10
    }
})
export default Card
