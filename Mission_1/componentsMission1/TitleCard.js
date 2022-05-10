import { View, Text,Button } from 'react-native'
import React from 'react'
import { windowWidth } from '../../Utils/Dimensions'
import Icon from 'react-native-vector-icons/FontAwesome';

const TitleCard = (props) => {
  return (
    <View style={{borderRadius:15,borderWidth:1,margin:5,width:windowWidth * 0.9,flexDirection:"row",justifyContent:'space-between'}}>
      <Text style={{marginLeft:5,fontWeight:'bold',fontSize:25,textAlign:'center'}}>{props.item.value}</Text>
      <Icon name="remove" size={25} style={{width:windowWidth*0.1,alignSelf:'center'}} onPress={()=>props.removeFromTheArray(props.item.id)}/>
    </View>
  )
}

export default TitleCard