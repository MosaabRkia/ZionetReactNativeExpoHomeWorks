import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native';

export default function widthInput() {
  const [borderWidth,setBorderWidth] = useState(1);
  const [text,setText] = useState("fill up");
  const window = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={{borderWidth:borderWidth,padding:5}}>

      <Text  >{text.trim()===""?'fill the input':text}</Text>
      </View>
      <StatusBar style="auto" />
      <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-around',width:window.width * 0.8}}>

      <Button onPress={()=>{
        if(borderWidth > 1)
          setBorderWidth(borderWidth-1)
        else
          alert('its on 1 thats the minimum !')
      }} title={"-"}/>
      <Button onPress={()=>{
        if(borderWidth > 0)
          setBorderWidth(borderWidth+1)
    
      }} title={"+"}/>
      </View>
      <TextInput placeholder='Fill Up Here' onChangeText={setText} style={{textAlign:'center',borderWidth:1,width:window.width * 0.8,marginTop:10}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
