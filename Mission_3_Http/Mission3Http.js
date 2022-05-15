import { View, Text,TextInput,Button,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { windowHeight, windowWidth } from '../Utils/Dimensions'
import { STATUSBAR_HEIGHT } from '../Utils/StatusHeight'

export default function Mission3Http() {
    const [empty,setEmpty]=useState(true);
    const [searchWord,setSearchWord]=useState("");
    const [data,setData]=useState(undefined);
    const key = '4b2881a8519840759f893510221505';
    // useEffect(()=>{
    //     searchData();
    // },[searchWord])

    const searchData=()=>{
        if(searchWord.trim() === "")
        {
            alert("Empty Field");
            setEmpty(true);
        }
        else{
            axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${searchWord}`)
            .then(res=>{
                console.log(res.data.location)
                setData(res.data)
                setEmpty(false)
            })
            .catch(err=>{
                setEmpty(true)
                alert("not found location");
            })
        }
    }

  return (
    <View>
      <View style={{marginTop:STATUSBAR_HEIGHT,flexDirection:'row',justifyContent:'center'}}>
    <TextInput
            placeholder='Enter country' 
                onChangeText={setSearchWord} 
               value={searchWord}
            keyboardType={"default"}
            style={{width:windowWidth * 0.7,borderWidth:1,textAlign:'center',height:windowHeight * 0.05}}   />
            <Button style={{borderWidth:1}} title ={"search"}
            onPress={()=>{
                searchData();
            }}
            />
        </View>
      
           {data !== undefined? 
           <View style={{alignSelf:'center',marginTop:25}}> 
        <Image
        style={ {width: windowWidth * 0.6,
            height:windowHeight * 0.2}}
        source={{
          uri: 'https:'+ data.current.condition.icon,
        }}
      />
        <Text style={{fontWeight:'bold',fontSize:35,alignSelf:'center'}}>{data.current.condition.text} in {data.location.name}</Text>
        <Text style={{fontWeight:'bold',fontSize:35,alignSelf:'center'}}>{data.current.feelslike_c} ℃</Text>
         </View>
            :<></>} 
            
          

      
    </View>
  )
}