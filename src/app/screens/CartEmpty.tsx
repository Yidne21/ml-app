import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Header from '../components/Custom/Header';

function CartEmpty() {
  return (
    <View style={styles.rootContainer}>
      <Header showRightIcon={true} />
      <View style={styles.container}>
        <Text style={styles.title}>Your cart is empty</Text>
        <Text style={styles.description}>
          Looks like you havent added anything to your cart yet
        </Text>
      </View>
    </View>
  );
}

export default CartEmpty;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});
