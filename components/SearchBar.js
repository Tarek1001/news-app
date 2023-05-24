import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, TextInput } from 'react-native';


const SearchBar =(props)=>{
    return(
        <View style={styles.container}>
           <TextInput
           placeholder='Search...'
           style={styles.input}
           value={props.searchText}
           onChangeText={(text) =>props.setSearchText(text)}
           onSubmitEditing={props.onSubmit}
           />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    container:{
        margin:5,
    },
    input:{
        color:"#000",
        borderWidth:1,
        padding:10,
        borderRadius: 40,
    }

})