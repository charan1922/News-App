import React from 'react'
import { View,Text,Image,StyleSheet,Linking } from 'react-native'
import Card from '../components/Card'
import CardSection from '../components/CardSection'
import CardSection1 from '../components/CardSection1'

const NewsDetail =({news})=>{
    const {url,urlToImage,title,source} = news;
    const {imageStyle,titleTextStyle,titleContentStyle,webTextStyle} = styles;

  
return(
<Card> 
    <CardSection>
    <Image
        style={imageStyle}
        source={{uri:urlToImage}}/>
     </CardSection>
     
     <CardSection1>
        <View style={titleContentStyle}>
          <Text 
          onPress={() => Linking.openURL(url).catch(err => console.error('An error occurred', err))}
         
          style={titleTextStyle}>{title}</Text>
          <Text style={webTextStyle}>{source.name}</Text>
        </View>
      </CardSection1>

</Card>
);
}

export default NewsDetail;

const styles=StyleSheet.create({
  
    imageStyle: {
        height: 200,
        flex: 1,
        width: null,
        borderTopRightRadius:4,
        borderTopLeftRadius:4,
        
      },
      titleTextStyle: {
        fontSize: 16,
        fontWeight: '600',
        color:'#433E3E',
        // fontFamily: 'roboto',
        // margin:8,
      },
      titleContentStyle: {
        margin:8,
        justifyContent: "space-around"
      },
      webTextStyle:{
        // margin:6,
        marginTop: 6,
        marginBottom: 6,
        fontSize: 11,
        color:"#B7B0B0",
      }

})