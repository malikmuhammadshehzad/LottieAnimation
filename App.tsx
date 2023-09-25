 import { StyleSheet, Text, View } from 'react-native'
 import React from 'react'
 import LottieView from 'lottie-react-native';
 const App = () => {
   return (
     <View style={{flex:1 , justifyContent:'center', alignSelf:'center'  }} >
       <LottieView  style={{width:300 , height:300}} source={require('./animation_lmrcfta9.json')} autoPlay loop />
 <Text style={{fontSize: 55, fontWeight:'600' , color:'black'}} >
  lottie Animation in React Native 
 </Text>

     </View>
   )
 }
 
 export default App
 
 const styles = StyleSheet.create({})