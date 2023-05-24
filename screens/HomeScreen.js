import React,{useEffect,useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';
import axios from 'axios';
import Article from '../components/Article';
import Category from '../components/Category';

const HomeScreen = () => {
  const [articles,setArticles] = useState([]);
  const [panelVisible, setPanelVisible] = useState(false);

  const getNews = (selectedCategory) => {
  // Make a request for a user with a given ID
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=2e0a8341a7bc474dbb1262b1715c418b',{
      params:{
        category:selectedCategory,
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
useEffect(()=>{
  getNews();
},[]);

return (
  <SafeAreaView style={styles.container}>
    <SwipeUpDown
      itemMini={<View style={styles.categoryMini}>{<Text>Swipe up to selecte a category</Text>}</View>}
      itemFull={
        <View style={styles.categoryFull}>{<Category category="technology" setCategory={getNews} />}</View>
      }
      onShowMini={() => setPanelVisible(true)}
      onHideFull={() => setPanelVisible(false)}
      swipeHeight={200}
      animation="easeInEaseOut"
      iconColor='#2196f3'
      iconSize={30}
      style={styles.swipeUpDown} // Apply style to the SwipeUpDown component
    />

    <View style={styles.contentContainer}>
      {/* Rest of your component code */}
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Article
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
            url={item.url}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
},
swipeUpDown: {
  position: 'absolute',
  marginTop:40,
  zIndex: 1,

},
contentContainer: {
  flex: 1,
  marginBottom: 20, // Adjust the marginTop to create space for SwipeUpDown component
},
categoryMini: {
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
 

},
categoryFull: {
  flex: 1,
  backgroundColor: '#fff',
},
});

export default HomeScreen;