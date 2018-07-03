import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/dist/Ionicons';



class BlogTab extends Component {

    static navigationOptions = {
        tabBarLabel: 'App Store',
        tabBarIcon: ({ focused, tintColor }) => {
            let iconName = focused ? 'ios-appstore' : 'ios-appstore-outline';
            return <Icon name={iconName} size={30} color={tintColor} />;
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