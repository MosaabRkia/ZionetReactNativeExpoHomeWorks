import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native';
import HomeWork1 from './HomeWork_1/HomeWork1';
import Mission1 from './Mission_1/Mission1';
import Mission2 from './Mission_2/Mission2';
import Mission3Http from './Mission_3_Http/Mission3Http';





export default function App() {
 
 return(
<>
<Mission3Http />
</>
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
