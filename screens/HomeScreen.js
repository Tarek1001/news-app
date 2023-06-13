import React,{useEffect,useState,useRef } from 'react';
import {View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';
import axios from 'axios';
import Article from '../components/Article';
import Category from '../components/Category';

const HomeScreen = ({navigation, route}) => {
  const [articles,setArticles] = useState([]);
  const [panelVisible, setPanelVisible] = useState(false);
  const { selectedValue = 'us' } = route.params || {};
  const [selectedCategory, setSelectedCategory] = useState('GENERAL');

  const getNews = (selectedCategory) => {
  // Make a request for a user with a given ID
    axios.get('https://newsapi.org/v2/top-headlines?apiKey=2e0a8341a7bc474dbb1262b1715c418b',{
      params:{
        country: selectedValue ,
        category:selectedCategory,
      }
    })
      .then( (response)=> {
  // handle success 
      setArticles(response.data.articles);
      if (selectedCategory == null) {
        setSelectedCategory('GENERAL');
      } else {
        setSelectedCategory(selectedCategory.toUpperCase());
      }
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
  },[selectedValue]);

  const flatListRef = useRef(null);
  const firstItemValueRef = useRef(null);
  const secondItemValueRef = useRef(null);

  useEffect(() => {
    if (flatListRef.current && articles.length > 0) {
      const firstItemValue = articles[0].title;
      const secondItemValue = selectedCategory;
      if (firstItemValueRef.current !== firstItemValue || secondItemValueRef.current !== secondItemValue) {
        flatListRef.current.scrollToIndex({ animated: true, index: 0 });
      }
      firstItemValueRef.current = firstItemValue;
    }
  }, [articles]);

return (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>{selectedCategory}</Text>
    <SwipeUpDown 
      itemMini={
        <View style={styles.categoryMini}>
            {<Text style={styles.text}>↑ Swipe up ↑</Text>}
        </View>}
      itemFull={
        <View style={styles.categoryFull}>
          {<Category  category='technology' setCategory={getNews} />}
        </View>
      }
      onShowMini={() => setPanelVisible(true)}
      onHideFull={() => setPanelVisible(false)}
      swipeHeight={200}
      animation="easeInEaseOut"
      iconColor='#2196f3'
      iconSize={30}
      style={styles.swipeUpDown} 
    />
    <View style={styles.contentContainer}>
      <FlatList
        data={articles}
        ref={flatListRef}
        initialNumToRender={4}
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
export default HomeScreen;

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
    marginBottom: 20,
  },
  categoryMini: {
    backgroundColor: '#fff',
  },
  categoryFull: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    backgroundColor: '#fff',
    textAlign: 'center',
    fontFamily:'Cochin',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 20,
   
  },
});

