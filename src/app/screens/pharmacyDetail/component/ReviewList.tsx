import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ReviewItem from './ReviewItem';
import { Ireview } from '../slice/types';

function ReviewList({ reviews }: { reviews: Ireview[] }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ReviewList;
