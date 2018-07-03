import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    // View,
    // Image,
    // Text,
    
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import HomeTab from './AppTabNavigator/HomeTab'
import FavoriteTab from './AppTabNavigator/FavoriteTab'
import BlogTab from './AppTabNavigator/BlogTab'
import ProfileTab from './AppTabNavigator/ProfileTab'



// const homeIcon = require('./images/home.png');
// const favIcon = require('./images/star.png');
// const blogIcon = require('./images/notebook.png');
// const profileIcon = require('./images/profile.png');
const AppTabNavigator = createBottomTabNavigator({
    HomeTab:{
        screen: HomeTab,
       
    },

    FavoriteTab:{
       screen: FavoriteTab,
       
   },

   BlogTab:{
       screen: BlogTab,
       
   },

   ProfileTab:{
       screen: ProfileTab,
      
   },

}, 
{
   animationEnabled:true,
   swipeEnabled: true,
   tabBarPosition:"bottom",
   tabBarOptions:{
       style:{
           ...Platform.select({
               android:{
                   backgroundColor:'white'
               }
           })
       },
       activeTintColor:'#000',
       inactiveTintColor:'#d1cece',
       showLabel: false,
       showIcon:true
   }
});

class Mainscreen extends Component {
    render() {
        return (
           <AppTabNavigator />
        );
    }

    // render() {
    //     return (
    //         <TabBarIOS
    //             tintColor="#42b49a"
    //         >
    //             {this.renderTab(
    //                 { title: 'Home', id: 'home', icon: homeIcon })}
    //             {this.renderTab(
    //                 { title: 'Favorites', id: 'favorites', icon: favIcon })}
    //             {this.renderTab(
    //                 { title: 'Blog', id: 'blog', icon: blogIcon })}
    //             {this.renderTab(
    //                 { title: 'Profile', id: 'profile', icon: profileIcon })}
    //         </TabBarIOS>
    //     );
    // }

    // renderTab(options) {
    //     return (
    //         <TabBarIOS.Item
    //             title={options.title}
    //             selected={this.state.selected === options.id}
    //             onPress={() => this.selectTab(options.id)}
    //             icon={options.icon}
    //         >
    //             <View style={styles.container}>
    //                 <Image source={options.icon} style={styles.icon} />
    //                 <Text style={styles.title}>{options.title}</Text>
    //             </View>
    //         </TabBarIOS.Item>
    //     );
    // }

    // selectTab(id) {
    //     this.setState({
    //         selected: id,
    //     });
    // }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default Mainscreen;


