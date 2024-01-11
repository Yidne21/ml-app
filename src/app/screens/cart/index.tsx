import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../../components/Custom/Header';

function Cart() {
  return (
    <View style={styles.container}>
      <Header showRightIcon={true} />
      <Text>Cart</Text>
    </View>
  );
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
  },
});
