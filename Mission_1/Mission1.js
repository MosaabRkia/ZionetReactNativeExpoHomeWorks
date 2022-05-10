import { View, Text ,TextInput,Button} from 'react-native'
import React, { useState } from 'react'
import { windowHeight, windowWidth } from '../Utils/Dimensions'
import { STATUSBAR_HEIGHT } from '../Utils/StatusHeight'
import TitleCard from './componentsMission1/TitleCard'


const Mission1 = () => {
    const [array,setArray] = useState([])
    const [title,setTitle] = useState("")
   
    // Create Unique Id
    const  UID =()=>{
        let id;
        do {
            id = "id_" + Math.random().toString(16).slice(2)
        } while (array.find(e=>e.id === id));
        return id;
    }
    
    //add to array
    const addToTheArray = () =>{
        if(title.trim() !== '')
        {
            setArray([...array,{id:UID,value:title}])
            setTitle("")
            alert("Sucessfully Added !")
        }
        else{
            alert("Please Fill The Title Input")
        }
    }

    // remove from the array
    const removeFromTheArray=(id)=>{
        setArray(array.filter(e=>e.id !== id))
        alert("Sucessfully Deleted !")
    }

  return (
    <View style={{alignItems:'center'}}>
        {/* Header */}
        <View style={{marginTop:STATUSBAR_HEIGHT,flexDirection:'row'}}>
    <TextInput
            placeholder='Enter title' 
               onChangeText={setTitle} 
               value={title}
            keyboardType={"default"}
            style={{width:windowWidth * 0.8,borderWidth:1,textAlign:'center',height:windowHeight * 0.05}}   />
            <Button style={{borderWidth:1}} title ={"+"}
            onPress={(e)=>{
                addToTheArray();
            }}
            />
        </View>
 


        {/* Body */}
        <View>
            {array.length>0 && array.map((e,index)=><TitleCard key={index} item={e} removeFromTheArray={removeFromTheArray} />)}
            </View>



        {/* Footer */}
        <View>
            
            </View>
      
    </View>
  )
}

export default Mission1