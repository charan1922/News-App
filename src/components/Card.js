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

      borderTopRightRadius:5,
      borderTopLeftRadius:5,
      borderBottomWidth: 0,

      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 1,
      shadowRadius: 3,
      
      marginLeft: 3,
      marginRight: 3,
      marginTop: 5,
       marginBottom: 1,
      // paddingBottom: 4,
      elevation: 4,
      
    
    }
  });