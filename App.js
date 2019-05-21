/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Alert, Platform, StyleSheet, Button, Image, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    callFun = () => {
        alert("Image Clicked!!!");
    }

    render() {


        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'

        };



        return (

        <View style={styles.container}>
            <Button
                onPress={() => {
                    Alert.alert('You tapped the button!');
                }}
                title="Press Me"
                />

              
           


                <Image source={pic} style={{ width: 193, height: 110 }} />
                <Image onPress={() => {
                    Alert.alert('You tapped the button!');
                }} source={require('./Samurai.png')}

                    style={{ width: 193, height: 110 }} />
        
        
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>


                <TouchableOpacity activeOpacity={.5} onPress={this.callFun}>

                    <Image source={require('./Components/Assets/cards/Knight.jpg')} style={{ width: 193, height: 110 }} />

                </TouchableOpacity>


               
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
