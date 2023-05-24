import 'react-native-gesture-handler';
import React,{useEffect,useState} from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, SafeAreaView, ScrollView, FlatList,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const IntroScreen = () => {
  const navigation = useNavigation();
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>News</Text>
         {/* Image */}
         <Image
         source={
            require('../Images/logonews.png')
         }
         style={styles.image}
       />
       <Button 
       title="Press me"
       onPress={()=>navigation.navigate('Main')} 
       style={styles.button}>
       
     </Button>
      </SafeAreaView>
    );
  };
  export default IntroScreen;
  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    title:{
        fontSize:48,
        fontWeight: 'bold',
    },
    image:{
        height: 200,
        width: '50%',
        
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
      },
  })