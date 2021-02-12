import React, {Component} from 'react';
import { 
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class OnboardingScreen extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.headingText}>Onboarding</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#530084',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0, left: 0, right: 0, bottom: 0  
    },
    headingText: {
        fontSize: 20,
        fontFamily: 'MonumentExtended-Ultrabold',
        color: '#fff'
    }
})
