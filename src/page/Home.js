import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class HomeScreen extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>dari HomeScreen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#530084'
    }
})