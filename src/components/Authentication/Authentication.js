import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import {createStackNavigator} from 'react-navigation';


export default class Authentication extends Component {

    render() {
        return (
            <View>
                 <Text>Main component</Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </View>
               );
    }
}
