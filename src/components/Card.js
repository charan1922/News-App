import React from 'react'
import { View,Text,StyleSheet } from 'react-native'


const Card =(props)=>{
return(
    <View style={styles.containerStyle}>
        {props.children}
    </View>
 );
}

export default Card;

const styles = StyleSheet.create({
    containerStyle: {
      borderWidth: 1,
      borderColor: "#ddd",
      borderTopRightRadius:4,
      borderTopLeftRadius:4,
      borderBottomWidth: 0,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 5,
      elevation: 2,
    }
  });