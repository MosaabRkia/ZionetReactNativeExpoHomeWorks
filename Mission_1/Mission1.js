import { View, Text ,TextInput,Button,ScrollView,TouchableOpacity} from 'react-native'
import React, { useState ,useEffect} from 'react'
import { windowHeight, windowWidth } from '../Utils/Dimensions'
import { STATUSBAR_HEIGHT } from '../Utils/StatusHeight'
import TitleCard from './componentsMission1/TitleCard'


const Mission1 = () => {
    const [array,setArray] = useState([])
    const [title,setTitle] = useState("")
    const [topItem,setTopItem] = useState(undefined)
   

    // Create Unique Id
    const  UID = "id_" + Math.random().toString(16).slice(2)

    
    
    //add to array
    const addToTheArray = () =>{
        if(title.trim() !== '')
        {
            setArray([...array,{id:UID,value:title,marked:false,critical:false}])
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

    // mark from the array
    const markFromTheArray=(id)=>{
        setArray(array.map(item =>
            item.id === id
              ? {
                  ...item,
                  marked: !item.marked,
                }
              : item
          ))
        alert("Sucessfully Marked Changed!")
        
    }

    // critical from the array
    const criticalFromTheArray=(id)=>{
        setArray(array.map(item =>
            item.id === id
              ? {
                  ...item,
                  critical: !item.critical,
                }
              : item
          ))
          alert("Sucessfully Critical Changed!")

    }

    // change title of item
    const changeTitle=(id,newTitle)=>{
        setArray(array.map(item =>
            item.id === id
              ? {
                  ...item,
                  value: newTitle,
                }
              : item
          ))
          alert("Sucessfully title Changed!")

    }

        // set top in the array
        const setTop=(id)=>{
            setTopItem(undefined)
            array.length > 0 && array.forEach(item =>{
                if(item.id === id)
                    setTopItem(item)
            }
              )
            
              setArray(array.filter(item =>item.id !== id))
              alert("Sucessfully added To Top!")
    
        }
   

  return (
    <View style={{alignItems:'center'}}>
        {/* Header */}
        <View style={{marginTop:STATUSBAR_HEIGHT}}>
        
        {/* top Item */}
            <View >
        {topItem === undefined?
                <></>:
                <View style={{borderBottomWidth:2}}>
                <TitleCard 
                item={topItem} 
                removeFromTheArray={()=>setTopItem(undefined)} 
                markFromTheArray={()=>setTopItem({...topItem,marked:!topItem.marked})}
                criticalFromTheArray={()=>setTopItem({...topItem,critical:!topItem.critical})}
                changeTitle={(id,text)=>setTopItem({...topItem,value:text})}
                setTop={()=>alert("already in  top!")}
                 />

                <View style={{flexDirection: 'row',marginBottom:5,alignSelf:'center'}}>
                        <Button
                        title="Return To List"
                        onPress={()=>{
                            setArray([...array,topItem])
                            setTopItem(undefined)
                            alert("Sucessfully Returned To The List!")
                        }}
                        color={"blue"}
                        />

                    </View>
                </View>   }
            </View>
        
    <View style={{flexDirection:'row',marginTop:5}}>
    <TextInput
            placeholder='Enter title' 
               onChangeText={setTitle} 
               value={title}
            keyboardType={"default"}
            style={{width:windowWidth * 0.8,borderWidth:1,textAlign:'center',height:windowHeight * 0.05}}   />
            <Button style={{borderWidth:1}} title ={"+"}
            onPress={()=>{
                addToTheArray();
            }}
            />
        </View>
        </View>
 

        {/* Body */}
        <ScrollView style={{width:windowWidth * 0.9,height:windowHeight*0.9,borderWidth:1,borderRadius:15,padding:5,marginTop:10}}>
            {array.length>0 && array.map((e,index)=><TitleCard 
            key={index} 
            item={e} 
            removeFromTheArray={removeFromTheArray} 
            markFromTheArray={markFromTheArray}
            criticalFromTheArray={criticalFromTheArray}
            changeTitle={changeTitle}
            setTop={setTop}
            />)}
        </ScrollView>



        {/* Footer */}
        <View> 
 </View>
      
    </View>
  )
}

export default Mission1