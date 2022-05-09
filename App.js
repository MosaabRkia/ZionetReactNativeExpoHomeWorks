import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native';
import HomeWork1 from './HomeWork_1/HomeWork1';




export default function App() {
 
 return(

   <HomeWork1 />

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
