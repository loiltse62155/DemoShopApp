import React, { Component } from 'react';
import { View, StatusBar, Image, ScrollView, } from 'react-native';
import { createDrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation';
import Menu from './Menu';
import Shop from './Shop/Shop';
import ChangeInfo from '../ChangeInfo/ChangeInfo';
import OrdersHistory from '../OrdersHistory/OrdersHistory';

StatusBar.setHidden(true);
export default class Main extends Component {

    static navigationOptions = {
        title: 'Home', headerStyle: { display: 'none' }
    };
    render() {
        return (
 
            <DrawerStack />
   
        );
    }
}
const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View
            style={{
                height: 160,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Image
                source={require('../../assets/wordcloud_yb8aur7dt.png')}
                style={{ height: 120, width: 120, borderRadius: 60 }}
            />
        </View>

        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
);
const DrawerStack = createDrawerNavigator(
    {
        MENU: Menu,
        SHOP: Shop,
        CHANGE_INFO: ChangeInfo,
        ORDER_HISTORY: OrdersHistory
    },
    {
        contentComponent: CustomDrawerComponent,
        contentOptions: {
            activeTintColor: 'orange'
        }
    }
);
