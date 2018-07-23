import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { createStackNavigator } from 'react-navigation';


export default class Main extends Component {
    // gotoAuthentication() {
    //     this.props.
    // }
    static navigationOptions = {
        title: 'Home',
      };
    render() {
        return (
         
            <View>
                 <Text>Main component</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AUTHENTICATION')}>
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CHANGE_INFO')}>
                    <Text>Go to ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ORDERS_HISTORY')}>
                    <Text>Go to OrdersHistory</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}
