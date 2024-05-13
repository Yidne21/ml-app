import React from 'react';
import { Text } from '../../components/Basic';
import { RootStackScreenProps } from '../../../navigation/types';

function CheckOut({ route, navigation }: RootStackScreenProps<'CheckOut'>) {
  return <Text>{route.params.cartId}</Text>;
}

export default CheckOut;
