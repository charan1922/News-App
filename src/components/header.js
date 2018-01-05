import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text>Albums!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header:{
justifyContent: 'center',
alignItems: 'center',
height: 60,
backgroundColor: '#C64848',
paddingTop: 15
}
})

export default Header;

