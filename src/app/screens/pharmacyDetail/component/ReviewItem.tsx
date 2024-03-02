import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
import { Ireview } from '../slice/types';
import renderStars from '../../../components/Custom/DinamicStar';
import { Flex, Text, Image } from '../../../components/Basic';

function ReviewItem({ review }: { review: Ireview }) {
  return (
    <Flex
      flexDirection="row"
      margin={'5px'}
      padding={'10px'}
      borderRadius={10}
      backgroundColor="#fff"
      borderBottomWidth={1}
      borderBottomColor={'#ccc'}
    >
      <Image
        source={{ uri: review.user.avatar }}
        width={50}
        height={50}
        borderRadius={25}
        resizeMode="cover"
      />
      <Flex flex={1} marginLeft={'10px'}>
        <Flex flexDirection="row" alignItems="center" marginBottom={'5px'} gap={5}>
          <Text fontWeight="bold" fontSize={16}>
            {review.user.name}
          </Text>
          {renderStars(review.rating, 'reviewItem')}
          <Text color="grey" marginLeft={'15px'}>
            5m ago
          </Text>
        </Flex>
        <Text marginTop={'5px'} ml={'0px'}>
          {review.feedback}
        </Text>
      </Flex>
    </Flex>
  );
}

export default ReviewItem;
