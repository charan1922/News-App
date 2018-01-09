import React from 'react'
import { View,Text,StyleSheet } from 'react-native'


const CardSection1 = (props)=>{
    return(
        <View style={styles.containerStyle}>
           { props.children}
        </View>

    );
}


export default CardSection1;

const styles = StyleSheet.create({
    containerStyle: {
          padding:0,
          flexDirection: 'row',
          borderBottomWidth:0,
        //   borderTopRightRadius:4,
        //   borderTopLeftRadius:4,
          justifyContent: 'flex-start',
          backgroundColor: '#FFF',
          borderColor: '#ddd',
          position: 'relative',
    }
  });