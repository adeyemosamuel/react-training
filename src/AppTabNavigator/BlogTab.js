import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Foundation from 'react-native-vector-icons/Foundation';



class BlogTab extends Component {

    static navigationOptions = {
        tabBarLabel: 'Blog',
        tabBarIcon: ({ focused, tintColor }) => {
            // let iconName = focused ? 'ios-appstore' : 'ios-appstore-outline';
            let iconName = 'social-blogger';
            return <Foundation name={iconName} size={30} color={tintColor} />;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>BlogTab</Text>
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

export default BlogTab;