import { View, Text,Button,TextInput } from 'react-native'
import React,{useState} from 'react'
import { windowHeight, windowWidth } from '../../Utils/Dimensions'
import Icon from 'react-native-vector-icons/FontAwesome';

const TitleCard = (props) => {
  const [showEdit,setShowEdit] = useState(false)
  const [newTitle,setNewTitle] = useState("")

  const changeTitle=()=>{
    if(newTitle === props.item.value)
    alert("same title!")
    else if(newTitle.trim() === '')
    alert("empty title!")
    else{
      props.changeTitle(props.item.id,newTitle)
      setNewTitle('')
    }

  }
  return (
    <View style={{backgroundColor:props.item.critical?"red":"white",borderRadius:15,borderWidth:props.item.marked?5:1,margin:5,width:windowWidth * 0.85,justifyContent:'space-around'}}>
      <View>
      <Text style={{fontWeight:'bold',fontSize:25,textAlign:'center'}}>{props.item.value}</Text>
      </View>
      <View style={{flexDirection:'row',alignSelf:'center'}}>

      <Icon name="remove" size={25} style={{width:windowWidth*0.1,alignSelf:'center'}} onPress={()=>props.removeFromTheArray(props.item.id)}/>
      <Icon name="arrow-up" size={25} style={{width:windowWidth*0.1,alignSelf:'center'}} onPress={()=>props.setTop(props.item.id)}/>
      <Icon name="edit" size={25} style={{width:windowWidth*0.1,alignSelf:'center'}} onPress={()=>setShowEdit(!showEdit)}/>
           
     <Icon name={props.item.marked?"bookmark":"bookmark-o"} size={25} style={{width:windowWidth*0.1,alignSelf:'center'}} onPress={()=>props.markFromTheArray(props.item.id)}/>
      <Icon name={"exclamation-circle"} size={25} style={{width:windowWidth*0.1,alignSelf:'center'}} onPress={()=>props.criticalFromTheArray(props.item.id)}/>
      </View>
      {
        showEdit?
<View style={{flexDirection:'row',alignSelf:'center',margin:5}}>        
        <TextInput
        placeholder='Enter New title' 
           onChangeText={setNewTitle} 
           value={newTitle}
        keyboardType={"default"}
        style={{width:windowWidth * 0.7,borderWidth:1,textAlign:'center',height:windowHeight * 0.05,alignSelf:'center',borderLeftWidth:10}}   />
  <View style={{justifyContent:'center',borderWidth:1,backgroundColor:'green',padding: 5}}>

<Icon name="edit" style={{alignSelf:'center'}} size={25}
            onPress={()=>{
                changeTitle();
            }}
            />
    </View>

</View>
        :<></>
      }
      
    </View>
  )
}

export default TitleCard