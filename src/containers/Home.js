/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {getNewsData} from '../store/actions/Home';

import {types} from '../store/types';

import NewsCard from '../components/NewsCard';

const Home = () => {
  const [SearchArray, setSearchArray] = useState([]);

  const dispatch = useDispatch();

  const NewsData = useSelector(state => state.Home.NewsData);

  useEffect(() => {
    dispatch(getNewsData());
    console.log('hello world');
  }, [dispatch]);

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Search'}
          onChangeText={query => {
            setSearchArray(NewsData.filter(item => item.content.search(query)));
            console.log(SearchArray);
          }}
        />
      </View>
      <ScrollView
        style={{
          backgroundColor: '#dfdfdf',
        }}>
        {SearchArray === []
          ? SearchArray.map((item, index) => {
              if (index < 10) {
                return (
                  <NewsCard
                    data={item}
                    key={index}
                    containerStyle={{
                      marginBottom: index === 9 ? 16 : 0,
                    }}
                  />
                );
              }
            })
          : NewsData.map((item, index) => {
              if (index < 10) {
                return (
                  <NewsCard
                    data={item}
                    key={index}
                    containerStyle={{
                      marginBottom: index === 9 ? 16 : 0,
                    }}
                  />
                );
              }
            })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#dfdfdf',
  },
  input: {
    backgroundColor: '#fff',
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
});

export default Home;
