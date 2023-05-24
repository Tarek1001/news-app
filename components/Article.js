import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, Pressable } from 'react-native';
import moment from "moment";
import * as WebBrowser from 'expo-web-browser';

const Article = (props) => {
  const gotoTheSource=()=>{
    WebBrowser.openBrowserAsync(props.url);
  }
  return (
    <Pressable style={styles.container} onPress={gotoTheSource}>
      {/* Image */}
      <Image
        source={{
          url: props.urlToImage,
        }}
        style={styles.image}
      />
      {/* Title */}
      <Text style={styles.title}>{props.title}</Text>
      {/* Description */}
      <Text style={styles.description} numberOfLines={3}>
        {props.description}
      </Text>
      <View style={styles.data}>
        <Text style={styles.heading}>
        by: {props.author && props.author.length < 40 && !props.author.startsWith("http") ? (
          <Text style={styles.author}>{props.author.split(',')[0]}</Text>
        ) : null}
          {/* by: <Text style={styles.author}>{props.author}</Text> */}
        </Text>
        <Text style={styles.date}>{moment(props.publishedAt).format("MMM Do YY")}</Text>
      </View>
      {/* Source */}
      <Text style={styles.source}>{props.sourceName} </Text>
    </Pressable>
  );
};
export default Article;
const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 40,
    shadowOpacity: 1.5,
    shadowColor: '#000',
    textShadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: '#fff',
    marginTop: 10,
  },
  image: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  heading: {},
  author: {
    fontWeight: 'bold',
  },
  date: {
    fontWeight: 'bold',
    color: '#2196f3',
  },
  source: {
    fontWeight: 'bold',
    color: '#f3212d',
    marginTop: 10,
    padding: 10,
  },
});
