import React from 'react';
import Header from '../components/Custom/Header';
import { Text, Box, Flex } from '../components/Basic';

function CartEmpty() {
  return (
    <Flex flex={1} p={'16px'}>
      <Header showRightIcon={true} />
      <Box justifyContent={'center'} alignItems={'center'}>
        <Text fontSize={24} fontWeight={'bold'} mb={'10px'}>
          Your cart is empty
        </Text>
        <Text fontSize={16} textAlign={'center'} mb={20}>
          Looks like you havent added anything to your cart yet
        </Text>
      </Box>
    </Flex>
  );
}

export default CartEmpty;
