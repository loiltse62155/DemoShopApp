import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import {createStackNavigator} from 'react-navigation';


export default class ChangeInfo extends Component {

    render() {
        return (
            <View>
                <Text>Change Info Component</Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Go back to main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
