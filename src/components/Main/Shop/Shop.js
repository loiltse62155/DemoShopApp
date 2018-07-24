import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Shop extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#09253B' }}>
                <Text>Shop component</Text>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text>Go back to Main</Text>
        </TouchableOpacity>
            </View>
            
        );
    }
}
