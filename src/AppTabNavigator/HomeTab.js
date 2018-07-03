import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import FontAwesome from 'react-native-vector-icons/FontAwesome';


class HomeTab extends Component {

    static navigationOptions = {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, tintColor }) => {
            // let iconName = focused ? 'ios-appstore' : 'ios-appstore-outline';
            let iconName = 'home';
            return <FontAwesome name={iconName} size={30} color={tintColor} />;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>HomeTab</Text>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
   
});

export default HomeTab;