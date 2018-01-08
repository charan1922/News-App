import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.textStyle}>NEWS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#C64848",

  },
  textStyle:{
    fontSize: 14,
    fontWeight: '800',
    color: '#FFFFFF',

  }
});

export default Header;
