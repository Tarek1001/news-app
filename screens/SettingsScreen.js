import React, { useState } from 'react';
import { View, FlatList,StyleSheet, Text } from 'react-native';
import { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const SettingsScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState('us');
  const [data, setData] = useState([
    { label: 'English 🇬🇧', value: 'us' },
    { label: 'Polish  🇵🇱', value: 'pl' },
    { label: 'Arabic  🇦🇪', value: 'eg' },
  ]);
 
  const renderItem = ({ item }) => {

    const handlePress = (value) => {
      if (value !== selectedValue) {
        setSelectedValue(value);
        navigation.navigate('Home', { selectedValue: value });
      }
    };
    
    return (
      <RadioButton labelHorizontal={true} key={item.value}>
        <RadioButtonInput
          obj={item}
          initial={0}
          isSelected={selectedValue === item.value}
          onPress={() => handlePress(item.value)}
          buttonInnerColor={'#2196f3'}
          buttonOuterColor={selectedValue === item.value ? '#2196f3' : '#000'}
          buttonSize={20}
          buttonStyle={{}}
          buttonWrapStyle={{ marginLeft: 10 }}
        />
        <RadioButtonLabel
          obj={item}
          labelHorizontal={true}
          labelStyle={styles.labelstyle}
          labelWrapStyle={styles.buttonstyle}
          onPress={() => handlePress(item.value)}
        />
      </RadioButton>
    );
  };

  return (
    <View style={styles.continer}>
      <Text style={styles.text}>Select language </Text>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={renderItem}
        initialNumToRender={3}
        keyExtractor={(item) => item.value.toString()}
      />
    </View>
  );
};

export default SettingsScreen;
const styles = StyleSheet.create({
  continer:{ 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' ,
    backgroundColor: '#fff',
  },
  list: {
    backgroundColor: '#fff',
    padding: 10,
    flexGrow: 0,
  },
  text: {
    padding: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontFamily: 'Cochin',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  labelstyle: {
    fontFamily: 'Cochin',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 20,
  },
  buttonstyle: {
    
  },
});
