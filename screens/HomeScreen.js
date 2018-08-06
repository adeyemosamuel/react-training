import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left, Right} from 'native-base';




class HomeScreen extends Component {

  render() {
    return (
     <Container>
       <Header>
        <Left>
          <Button transparent>
            <Icon name="ios-menu" onPress={()=>this.props.navigation.openDrawer()}/>
          </Button>
        </Left>

        <Right />
      </Header>

       <Content contentContainerStyle={{
         flex:1,
         alignItems:'center',
         justifyContent: 'center'
       }}>
         <Text>Home Screen</Text>
       </Content>
     </Container>
    );
  }
}

export default HomeScreen;


