import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, Dimensions, View } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const HomeWork1=()=> {
    const [total,setTotal] = useState(0)
    const [numbers,setNumbers] = useState({number_1:0,number_2:0,number_3:0});
  
    useEffect(()=>{
        if(
          numbers.number_1 !== '' && isNumeric(numbers.number_1) &&
          numbers.number_2 !== '' && isNumeric(numbers.number_2) &&
          numbers.number_3 !== '' && isNumeric(numbers.number_3)
        )
        setTotal(parseFloat(numbers.number_1)+parseFloat(numbers.number_2)+parseFloat(numbers.number_3) )
          else setTotal("Format Error")
    },[numbers])
  
    const isNumeric=(num)=>{
      return !isNaN(+num)
    }
  
   return(
     <View style={{justifyContent:"center",flex:1,alignItems:'center'}}>
       <View style={{borderWidth:5,padding:25,borderRadius:10}}>
       <Text style={{fontSize:25,fontWeight:'bold',textDecorationLine:'underline'}}>Enter Numbers In X Places</Text>
     <View style={{alignSelf:'center',flexDirection:'row'}}>
           <TextInput 
           placeholder='X' 
           onChangeText={(e)=>{
             if(e === '')
             setNumbers({...numbers,number_1:0})
            else if(isNumeric(e)) 
            setNumbers({...numbers,number_1:e})
            else{
              alert("Wrong Format")
            }
           }
          } 
           keyboardType={"numeric"}
           style={styles.inputText}           />
    <Text style={styles.plusStyle}>+</Text>
           <TextInput 
           placeholder='X' 
           keyboardType={"numeric"}
           onChangeText={(e)=>{
            if(e === '')
            setNumbers({...numbers,number_2:0})
           else if(isNumeric(e)) 
           setNumbers({...numbers,number_2:e})
           else{
            alert("Wrong Format")
          }
          }}
          style={styles.inputText}
           />
           <Text style={styles.plusStyle}>+</Text>
           <TextInput 
            keyboardType={"numeric"}
           placeholder='X' 
           onChangeText={(e)=>{
            if(e === '')
            setNumbers({...numbers,number_3:0})
           else if(isNumeric(e)) 
           setNumbers({...numbers,number_3:e})
           else{
             alert("Wrong Format")
           }
          }}
           style={styles.inputText}
           />
     </View>
    <Text style={{borderRadius:15,fontSize:25,fontWeight:'bold',textAlign:'center',borderWidth:1,width:windowWidth*0.3,alignSelf:'center',marginTop:10}}>
    {total}
      </Text></View>
     </View>
   );  

}
;
const styles = StyleSheet.create({
  plusStyle:{margin:5,borderRadius:15,fontSize:25,fontWeight:'bold',textAlign:'center',borderWidth:1,width:windowWidth*0.1,alignSelf:'center',marginTop:10}
  ,inputText:{borderBottomWidth:1,margin:5,textAlign:'center',width:windowWidth * 0.1,marginTop:10}
})

export default HomeWork1;