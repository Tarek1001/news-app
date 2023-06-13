import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from "./screens/HomeScreen"
import IntroScreen from "./screens/IntroScreen"
import SearchScreen from "./screens/SearchScreen"
import SettingsScreen from "./screens/SettingsScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo,EvilIcons,AntDesign} from '@expo/vector-icons'; 



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Stack.Navigator>
    
    <Stack.Screen name="Intro" component={IntroScreen} />
    <Stack.Screen name="Main" component=  {Main = () =>{
      return (
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#FF0000'
        }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: () =><Entypo name="home" size={24} color="black" />
        }}/>
        <Tab.Screen name="Search" component={SearchScreen} options={{
            tabBarIcon: () =><EvilIcons name="search" size={24} color="black" />
        }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarIcon: () =><AntDesign name="setting" size={24} color="black" />
      }}/>
    </Tab.Navigator>
      )
    } }/>

  </Stack.Navigator>
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
 
  }

});
