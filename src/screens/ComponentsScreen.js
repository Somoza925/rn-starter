import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ComponentsScreen = () => {
    const name = 'Michael Somoza';
    const greeting = <Text>Hello to you :)</Text>;

    return (
    <View>
        <Text style = {styles.textStyle}> Getting started with react native! </Text>
        <Text style = {styles.subHeaderSytle} >My name is {name}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
         fontSize: 45 
    },
    subHeaderSytle:{
        fontSize: 20
    }
});


export default ComponentsScreen; 