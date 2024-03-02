import React from 'react';
import { FlatList } from 'react-native';
import ReviewItem from './ReviewItem';
import { Ireview } from '../slice/types';
import { Flex } from '../../../components/Basic';

function ReviewList({ reviews }: { reviews: Ireview[] }) {
  return (
    <Flex flex={1}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(item) => item._id}
      />
    </Flex>
  );
}

export default ReviewList;
