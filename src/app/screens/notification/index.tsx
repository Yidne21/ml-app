import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';
import Header from '../../components/Custom/Header';
import { Text, Flex } from '../../components/Basic';

function Notification() {
  return (
    <Flex flex={1} padding={16}>
      <Header showRightIcon={true} />
      <Text>Notification Screen</Text>
    </Flex>
  );
}

export default Notification;
