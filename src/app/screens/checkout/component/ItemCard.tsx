import React from 'react';
import { Button, Flex, Text } from '../../../components/Basic';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../../../../utils/theme/theme';
import { Entypo } from '@expo/vector-icons';
import { fp } from '../../../../utils/constants';

interface ItemCardProps {
  item: {
    quantity: number;
    price: number;
    drugName: string;
  };
}

function ItemCard({ item }: ItemCardProps) {
  return (
    <Flex p={2} border={1} borderColor={theme.shadows.sm}>
      <Flex flexDirection={'row'} justifyContent={'space-between'} px={20} gap={4}>
        <Text fontSize={fp(2)} fontStyle={'bold'}>
          {item.drugName}
        </Text>
        <Button p={2} borderRadius={50}>
          <Entypo name="circle-with-cross" size={24} color={theme.colors.danger[500]} />
        </Button>
      </Flex>
      <Flex flexDirection={'row'} justifyContent={'space-between'} px={20} gap={4} py={'10px'}>
        <Text fontSize={fp(1.5)}>Price: {item.price} Birr</Text>
        <Flex flexDirection={'row'} gap={2} justifyContent={'center'} alignItems={'center'}>
          <Button p={2} borderRadius={50}>
            <AntDesign name="pluscircle" size={24} color={theme.colors.primary[500]} />
          </Button>
          <Text fontSize={fp(2)} fontStyle={'bold'}>
            {item.quantity}
          </Text>
          <Button p={2} borderRadius={50}>
            <AntDesign name="minuscircle" size={24} color={theme.colors.primary[500]} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default ItemCard;
