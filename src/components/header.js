import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.textStyle}>News</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    backgroundColor: "#C64848",

  },
  textStyle:{
    fontSize: 16,
    fontWeight: '900',
    color: '#FFFFFF',

  }
});

export default Header;
