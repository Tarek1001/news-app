import 'react-native-gesture-handler';
import React, { useEffect, useRef } from 'react';
import {Animated, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

const IntroScreen = () => {
  {/* Get  Dimensions*/}
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  {/* Animation */}
  const animatedValue = useRef(new Animated.Value(0)).current;
  {/* Shape */}
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      delay: 100,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);
  
  {/* Width */}
  const lineWidth = animatedValue.interpolate({
    inputRange: [0,1],
    outputRange: [0,windowWidth/1.5],
  });
  {/* Color */}
  const lineColor = animatedValue.interpolate({
    inputRange: [0,1],
    outputRange: ['#e50000','#2196f3'],
  });
  {/* navigation */}
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Main')
  }
    return (
      <SafeAreaView  style={styles.container}>
        <Text style ={styles.text}>News Application</Text>
        <Animated.View style={[styles.straightLine,{width:lineWidth,backgroundColor:lineColor}]} />
        <Button
        text='Start'
        type='outlined'
        bordered
        size='large'
        textColor='#fff'
        height={100}
        onPress={onPress}
        setTimer
        />
      </SafeAreaView>
    );
  };
  export default IntroScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      margin:10,
      fontSize:18,
      fontWeight: 'bold',
      color: '#2196f3',
      backgroundColor: '#fff',
    },
    straightLine: {
      margin:10,
      height: 10,
    },
  })