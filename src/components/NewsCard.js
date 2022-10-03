import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const NewsCard = props => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Image source={{uri: props.data.urlToImage}} style={styles.image} />
      <Text style={styles.heading}>{props.data.title}</Text>
      <Text style={styles.description}>{props.data.description}</Text>
      <Text style={styles.content}>{props.data.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 8,
    marginTop: 16,
    elevation: 6,
    borderRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  heading: {
    marginVertical: 8,
    marginHorizontal: 8,
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    marginHorizontal: 8,
  },
  content: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 14,
    marginHorizontal: 8,
  },
});

export default NewsCard;
