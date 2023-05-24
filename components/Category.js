import React from 'react';
import RadioForm from 'react-native-simple-radio-button';
import {Text, StyleSheet,SafeAreaView } from 'react-native';

const Category=(props)=> {
  const options = [
    { label: 'Technology',  value: 'technology' },
    { label: 'Sports', value: 'sports' },
    { label: 'Science',  value: 'science' },
    { label: 'Health', value: 'health' },
    { label: 'Business',  value: 'business' },
    { label: 'Entertainment', value: 'entertainment' },
  ]; 
  
  return (
    <SafeAreaView >
      <Text style={styles.text}>Select Category</Text>
      <RadioForm style={styles.container}
        radio_props={options}
        initial={-1}
        onPress={(category)=>props.setCategory(category)}
        formHorizontal={false}
        labelHorizontal={true}
        buttonColor={'#2196f3'}
        labelStyle={styles.labelstyle}
        buttonStyle={styles.buttonstyle}
        buttonSize={10}
        buttonOuterSize={20}
        animation={false}
      />
    </SafeAreaView>
  );
}
export default  Category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
      },
  text: {
    textAlign: 'center',
    color:'#fff',
    fontFamily:'Cochin',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 10,
    backgroundColor: '#2196f3',
    },
  labelstyle: {
    fontFamily:'Cochin',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 20,
    },
  buttonstyle:{ 
  }
    });