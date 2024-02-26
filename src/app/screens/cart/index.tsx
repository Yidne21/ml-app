import React from 'react';
// import { StyleSheet } from 'react-native';
import Header from '../../components/Custom/Header';
import { Flex, Text } from '../../components/Basic';

function Cart() {
  return (
    <Flex p={16} flex={1} backgroundColor={'#fff'}>
      <Header showRightIcon={true} />
      <Text>Cart</Text>
    </Flex>
  );
}

export default Cart;

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
