import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../../components/Custom/Header';

function Notification() {
  return (
    <View style={styles.rootContainer}>
      <Header showRightIcon={true} />
      <Text>Notification Screen</Text>
    </View>
  );
}

export default Notification;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
});
