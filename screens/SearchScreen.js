import React,{useState} from 'react';
import {StyleSheet, SafeAreaView, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import Article from '../components/Article';
import axios from "axios";

const SearchScreen = () =>{
    const [searchText,setSearchText]=useState("");
    const [articles,setArticles] = useState([]);
    const searchArticles=()=>{
         
    axios.get('https://newsapi.org/v2/everything?apiKey=2e0a8341a7bc474dbb1262b1715c418b',{
        params:{
          q: searchText,
        }
      })
        .then( (response)=> {
    // handle success 
        setArticles(response.data.articles);
      })
        .catch(function (error) {
    // handle error
        console.log(error);
      })
        .finally(function () {
    // always executed
  });
    }
    return(
        <SafeAreaView   style={styles.container}>  
            <SearchBar searchText ={searchText} setSearchText={setSearchText} onSubmit={searchArticles}/>
            <FlatList
            data={articles}
            renderItem = {({item}) =>
                <Article
                    urlToImage = {item.urlToImage}
                    title = {item.title}
                    description = {item.description}
                    author = {item.author}
                    publishedAt = {item.publishedAt}
                    sourceName = {item.source.name}
                    url={item.url}
                />}
            keyExtractor = {(item) => item.title}
        />
        </SafeAreaView>
    )
}
export default SearchScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff"
  }
})