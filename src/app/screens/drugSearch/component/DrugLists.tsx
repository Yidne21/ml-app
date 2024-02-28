import React from 'react';
import { FlatList } from 'react-native';
import DrugItemCard from './DrugItemCard';
import { Idrug } from '../slice/types';
import { Flex } from '../../../components/Basic';

function DrugLists({ data }: { data?: Idrug[] }) {
  return (
    <Flex alignItems={'center'} backgroundColor={'#fff'}>
      <FlatList
        data={data}
        renderItem={({ item }) => <DrugItemCard drug={item} />}
        keyExtractor={(item) => item._id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </Flex>
  );
}

export default DrugLists;
