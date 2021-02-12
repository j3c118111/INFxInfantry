import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import LottieView from 'lottie-react-native';
// import HomeScreen from './Home';


export default class SplashScreen extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.heading2Text}>in collaboration INF with Infantry</Text>
            <Text style={styles.headingText}>Always There For You</Text>                
            <LottieView 
                style={{width: '50%', alignSelf: 'center'}}
                source={require('../../assets/splash.json')} 
                autoPlay 
                loop={false}
                speed={0.5}
                onAnimationFinish = {()=>{
                    console.log('Animation finished!')    
                    this.props.navigation.replace('Onboarding');
                }}
            />                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#530084'
    },

    headingText: {
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'MonumentExtended-Ultrabold',
        color: '#fff'
    },
    heading2Text: {
        marginTop: 270,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'MonumentExtended-Regular',
        fontSize: 10,
        color: '#f3c24e'
    }


})