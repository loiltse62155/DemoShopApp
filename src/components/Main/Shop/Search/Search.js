import React, { Component } from 'react';
import { 
    View, Text, TouchableOpacity
 } from 'react-native';

 export default class Search extends Component {
    
     render() {
         return (
             <View>
                 <Text>Search Component</Text>
                 <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text>Go back to Main</Text>
        </TouchableOpacity>
             </View>
         );
     }
 }

