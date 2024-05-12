import React from 'react';
import { Flex, Text } from '../../../components/Basic';

interface ItemCardProps {
  item: {
    quantity: number;
    price: number;
    drugName: string;
  };
}

function ItemCard({ item }: ItemCardProps) {
  return (
    <Flex>
      <Flex flexDirection={'row'} justifyContent={'space-between'} px={20} gap={4}>
        <Text>{item.drugName}</Text>
        <Text>X</Text>
      </Flex>
      <Flex flexDirection={'row'} justifyContent={'space-between'} px={20} gap={4} py={'10px'}>
        <Text>{item.price}</Text>
        <Text>{item.quantity}</Text>
      </Flex>
    </Flex>
  );
}

export default ItemCard;
