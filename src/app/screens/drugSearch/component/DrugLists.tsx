import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import DrugItemCard from './DrugItemCard';

const data = [
  {
    _id: '657711b99f521e451a4993aa',
    name: 'Generic Concrete Ball',
    category: 'Grocery',
    price: 473396.3830805151,
    expiredDate: '2024-09-06T20:20:31.628Z',
    pharmacy: {
      _id: '657711b99f521e451a499364',
      location: [38.3379, 4.8584],
      name: 'Bashirian and Sons',
      distance: 314.09,
    },
  },
  {
    _id: '657711b99f521e451a499394',
    name: 'Tasty Frozen Shoes',
    category: 'Home',
    price: 932956.9279039279,
    expiredDate: '2024-07-13T19:11:10.285Z',
    pharmacy: {
      _id: '657711b99f521e451a499364',
      location: [38.3379, 4.8584],
      name: 'Bashirian and Sons',
      distance: 314.09,
    },
  },
  {
    _id: '657711b99f521e451a49938a',
    name: 'Gorgeous Concrete Chips',
    category: 'Kids',
    price: 691988.3468372282,
    expiredDate: '2024-02-13T22:34:20.869Z',
    pharmacy: {
      _id: '657711b99f521e451a499358',
      location: [41.9391, 7.0295],
      name: 'Larkin Group',
      distance: 335.73,
    },
  },
  {
    _id: '657711b99f521e451a49939c',
    name: 'Refined Granite Chair',
    category: 'Grocery',
    price: 378381.3292911509,
    expiredDate: '2024-01-15T12:23:44.532Z',
    pharmacy: {
      _id: '657711b99f521e451a499358',
      location: [41.9391, 7.0295],
      name: 'Larkin Group',
      distance: 335.73,
    },
  },
  {
    _id: '657711b99f521e451a499396',
    name: 'Handmade Bronze Towels',
    category: 'Books',
    price: 60579.148148652166,
    expiredDate: '2024-07-14T12:02:51.393Z',
    pharmacy: {
      _id: '657711b99f521e451a499340',
      location: [41.7055, 9.3739],
      name: 'Kemmer Inc',
      distance: 360.7,
    },
  },
  {
    _id: '657711b97f521e451a499396',
    name: 'Handmade Bronze Towels',
    category: 'Books',
    price: 60579.148148652166,
    expiredDate: '2024-07-14T12:02:51.393Z',
    pharmacy: {
      _id: '657711b99f521e451a499340',
      location: [41.7055, 9.3739],
      name: 'Kemmer Inc',
      distance: 360.7,
    },
  },
  {
    _id: '657711c97f521e451a499396',
    name: 'Handmade Bronze Towels',
    category: 'Books',
    price: 60579.148148652166,
    expiredDate: '2024-07-14T12:02:51.393Z',
    pharmacy: {
      _id: '657711b99f521e451a499340',
      location: [41.7055, 9.3739],
      name: 'Kemmer Inc',
      distance: 360.7,
    },
  },
];

function DrugLists() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <DrugItemCard />}
        keyExtractor={(item) => item._id}
        numColumns={2}
      />
    </View>
  );
}

export default DrugLists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
