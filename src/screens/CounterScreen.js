import React, { useReducer } from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';


const reducer = (state, action) => {
    // state === {counter : number}
    // action === {type: increase || decrease , payload: number}
    switch(action.type){
        case 'increase':
            return {...state, counter: state.counter + action.payload};
        case 'decrease':
            return {...state, counter: state.counter - action.payload};
        default:
            return state;
    }
};


const CounterScreen = () => {
    const[state, dispatch] = useReducer(reducer, {counter: 0})
    const {counter} = state;
    
    return <View>
        <Button title = "Increase" onPress = {() => {            
            // don't do it this!
            // counter++;
            dispatch({type: 'increase', payload: 15})
        }}/>
        <Button title = "Decrease" onPress = {() => {
            dispatch({type: 'decrease', payload: 15})
        }}/>
        <Text>Current Count: {counter}</Text>
    </View>
}

const styles = StyleSheet.create({});


export default CounterScreen;