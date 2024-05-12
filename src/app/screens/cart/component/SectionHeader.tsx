import React from 'react';
import { Button, Flex, Text } from '../../../components/Basic';

interface SectionHeaderProps {
  section: {
    title: string;
    totalQuantity: number;
    totalPrice: number;
  };
}

function SectionHeader({ section }: SectionHeaderProps) {
  return (
    <Flex flexDirection={'row'} gap={3} p={2}>
      <Text>{section.title}</Text>
      <Text>{section.totalQuantity}</Text>
      <Text>{section.totalPrice}</Text>
      <Button>
        <Text>check out</Text>
      </Button>
    </Flex>
  );
}

export default SectionHeader;
