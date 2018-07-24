import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { Header, Left } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Menu extends Component {
    static navigationOptions = {
        drawerIcon: ({ tintColor }) =>
            <Icon name='database' style={{ fontSize: 24, color: tintColor }} />

    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'purple' }}>


                <Icon
                    name="database"
                    onPress={
                        () => {
                            this.props.navigation.openDrawer();
                        }
                    }
                    style={{ fontSize: 24, color: 'orange' }}
                />


                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white'
                    }}
                >
                    <Text>Menu component</Text>
                    <View>


                        <TouchableOpacity
                            onPress={
                                () =>
                                    this.props.navigation.navigate('AUTHENTICATION')}
                        >
                            <Text>Go to Authentication</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={
                                () =>
                                    this.props.navigation.navigate('CHANGE_INFO')}
                        >
                            <Text>Go to ChangeInfo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={
                                () =>
                                    this.props.navigation.navigate('ORDERS_HISTORY')}
                        >
                            <Text>Go to OrdersHistory</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}
