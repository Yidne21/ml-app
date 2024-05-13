import React from 'react';
import { Button, Flex, Text } from '../../../components/Basic';
import { fp, wp } from '../../../../utils/constants';
import { theme } from '../../../../utils/theme/theme';
import { Entypo } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/types';

interface SectionHeaderProps {
  section: {
    title: string;
    totalQuantity: number;
    totalPrice: number;
    cartId: string;
  };
}

function SectionHeader({ section }: SectionHeaderProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleCheckout = () => {
    navigation.navigate('CheckOut', { cartId: section.cartId });
  };
  const handleDelete = () => {};
  return (
    <Flex
      backgroundColor={theme.colors.white}
      border={3}
      borderColor={theme.shadows.sm}
      p={10}
      my={1}
    >
      <Text fontSize={fp(2.5)} fontStyle={'bold'} p={'5px'} color={theme.colors.primary[900]}>
        {section.title}
      </Text>
      <Flex p={10} gap={10}>
        <Text fontSize={fp(1.7)}>Total price: {section.totalPrice} Birr</Text>
        <Text fontSize={fp(1.5)}>Quantity: {section.totalQuantity}</Text>
      </Flex>
      <Flex flexDirection="row" justifyContent="space-around" padding={10} gap={4}>
        <Button
          width={wp(30)}
          border={1}
          borderColor={theme.colors.primary[500]}
          padding={wp(1)}
          borderRadius={10}
          alignItems="center"
          onPress={handleCheckout}
        >
          <Text color={theme.colors.primary[900]}>Check Out</Text>
        </Button>
        <Button
          border={1}
          borderColor={theme.colors.danger[500]}
          padding={wp(1)}
          borderRadius={10}
          alignItems="center"
          onPress={handleDelete}
          width={wp(30)}
        >
          <Text color={theme.colors.danger[900]}>
            <Entypo name="cross" size={24} color={theme.colors.danger[500]} />
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}

export default SectionHeader;
