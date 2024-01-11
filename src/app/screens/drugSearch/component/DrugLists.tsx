import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import DrugItemCard from './DrugItemCard';
import { Idrug } from '../slice/types';

function DrugLists({ data }: { data: Idrug[] }) {
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
