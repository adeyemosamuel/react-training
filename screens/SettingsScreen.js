import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon, Button, Container, Header, Content,Left, Right} from 'native-base';




class SettingsScreen extends Component {
  static navigationOptions={
    drawerIcon: (
      <Image source={require('../src/images/settings.png')} style={{height: 24, width: 24}}/>
    )
  }

  render() {
    
    return (
     <Container>
      <Header>
        <Left>
          <Button transparent>
          <Icon name="ios-menu" onPress={()=>this.props.navigation.openDrawer()}/>
          </Button>
        </Left>
        <Right/>
      </Header>



       <Content contentContainerStyle={{
         flex:1,
         alignItems:'center',
         justifyContent: 'center'
       }}>
         <Text>Settings Screen</Text>
       </Content>
     </Container>
    );
  }
}

export default SettingsScreen;


