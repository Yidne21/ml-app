import React from 'react';
import Header from '../../components/Custom/Header';
import { Flex } from '../../components/Basic';
import { SectionList } from 'react-native';

function Cart() {
  return (
    <Flex p={16} flex={1} backgroundColor={'#fff'}>
      <Header showRightIcon={true} />
      <SectionList
        sections={[
          { title: 'Title1', data: ['item1', 'item2'] },
          { title: 'Title2', data: ['item3', 'item4'] },
          { title: 'Title3', data: ['item5', 'item6'] },
        ]}
        renderItem={({ item }) => <Flex>{item}</Flex>}
        keyExtractor={(item, index) => index.toString()}
        renderSectionHeader={({ section }) => <Flex>{section.title}</Flex>}
      />
    </Flex>
  );
}

export default Cart;
