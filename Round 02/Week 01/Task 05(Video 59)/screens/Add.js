import React, {useReducer} from 'react'
import { View, Text, StyleSheet} from 'react-native'
const reducer = (state, action) =>{
    switch(action.type){
        case 'increment': return{...state, count: state.count +1} 
        case 'decrement': return{...state, count: state.count -1}
        default: return state
    };
};
const Add = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    return(
        <View>
            <Text style={styles.head}>Use Reducer</Text>
            <Text style={styles.button} onPress={
                () => {
                    dispatch({type:'increment'})
                }
            }>Increase</Text>
            <Text style={styles.button} onPress={
                () => {
                    dispatch({type:'decrement'})
                }
            }>Decrease</Text>
    <Text style={styles.text}>Current Value: {state.count}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    head:{
        marginBottom: 20,
        fontSize: 35,
        textAlign: 'center',
    },
    button:{
        padding: 10,
        fontSize: 20,
        color: 'darkturquoise',
        textAlign: 'center'
    },
    text:{
        fontSize: 16,
        textAlign: 'center'
    }
});
export default Add;