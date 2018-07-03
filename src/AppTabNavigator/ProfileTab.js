import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/dist/Ionicons';



class ProfileTab extends Component {

    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused, tintColor }) => {
            // let iconName = focused ? 'ios-appstore' : 'ios-appstore-outline';
            let iconName = 'md-person';
            return <Icon name={iconName} size={30} color={tintColor} />;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>ProfileTab</Text>
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

export default ProfileTab;