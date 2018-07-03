import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// import Icon from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';



class FavoriteTab extends Component {

    static navigationOptions = {
        tabBarLabel: 'Favorite',
        tabBarIcon: ({ focused, tintColor }) => {
            // let iconName = focused ? 'ios-appstore' : 'ios-appstore-outline';
            let iconName = 'star';
            return <Entypo name={iconName} size={30} color={tintColor} />;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>FavoriteTab</Text>
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

export default FavoriteTab;