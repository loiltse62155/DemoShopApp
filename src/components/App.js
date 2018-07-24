import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrdersHistory from './OrdersHistory/OrdersHistory';


export default class App extends Component {

    render() {
        return (
            < RootStack />
        );
    }
}

const RootStack = createStackNavigator(
    {
        AUTHENTICATION: Authentication,
        MAIN: Main,
        CHANGE_INFO: ChangeInfo,
        ORDERS_HISTORY: OrdersHistory,

    },
    {
        initialRouteName: 'MAIN',
    }
);

