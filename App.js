import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";

import { DrawerNavigator, DrawerItems } from "react-navigation";
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { Container, Content,Header, Body, Icon } from "native-base";


class App extends Component {
  render() {
    return (
     <MyApp/>
    );
  }
}

const CustomDrawerContentComponent =(props)=>(
  <Container>
    <Header style={{height:200, backgroundColor:'white'}}>
      <Body>
        <Image style={styles.drawerImage}
        source={require('./src/images/sam.jpg')}/>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)


const MyApp = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings:{
    screen: SettingsScreen
  }
},{
  initialRouteName: 'Home',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute:'DrawerClose',
  drawerToggleRoute:'DrawerToggle'
})



export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  drawerImage:{
    height: 150,
    width: 150,
    borderRadius: 75
  }
});
