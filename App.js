import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";

import { DrawerNavigator } from "react-navigation";
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';


class App extends Component {
  render() {
    return (
     <MyApp/>
    );
  }
}




const MyApp = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings:{
    screen: SettingsScreen
  }
})

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
