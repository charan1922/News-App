import React from 'react'
import { View,Text,StyleSheet } from 'react-native'


const CardSection = (props)=>{
    return(
        <View style={styles.containerStyle}>
           { props.children}
        </View>

    );
}


export default CardSection;

const styles = StyleSheet.create({
    containerStyle: {
          padding:5,
          flexDirection: 'row',
          borderBottomWidth:1,
          borderTopRightRadius:4,
          borderTopLeftRadius:4,
          justifyContent: 'flex-start',
          backgroundColor: '#FFF',
          borderColor: '#ddd',
          position: 'relative',
    }
  });