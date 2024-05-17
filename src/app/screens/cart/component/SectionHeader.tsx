import React, { useEffect } from 'react';
import { Button, Flex, Text } from '../../../components/Basic';
import { fp, wp } from '../../../../utils/constants';
import { theme } from '../../../../utils/theme/theme';
import { Entypo } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../../navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import { useCartDtailScreenSlice } from '../slice';
import useCurrentCoordinates from '../../../../utils/hooks/useCurrentCoordinates';
import * as select from '../slice/selector';
import Toast from 'react-native-root-toast';

interface SectionHeaderProps {
  section: {
    title: string;
    totalQuantity: number;
    totalPrice: number;
    cartId: string;
    deliveryFee: number;
  };
}

function SectionHeader({ section }: SectionHeaderProps) {
  const isChekedOut = useSelector(select.selectIsCheckOutSuccess);
  const isOrderCreated = useSelector(select.selectIsOrderCreated);
  const creteOrderError = useSelector(select.selectCreateOrderError);
  const total = section.totalPrice + section.deliveryFee;

  let deliveryAddress = useCurrentCoordinates();
  if (section.deliveryFee < 0) {
    deliveryAddress = undefined;
  }
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { actions } = useCartDtailScreenSlice();
  const dispatch = useDispatch();

  useEffect(() => {
    if (creteOrderError) {
      Toast.show(creteOrderError, {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      dispatch(actions.clearState());
    }

    if (isChekedOut || isOrderCreated) {
      navigation.navigate('CheckOut');

      dispatch(actions.clearState());
    }
  }, [actions, creteOrderError, dispatch, isChekedOut, isOrderCreated, navigation]);

  const handleCheckout = () => {
    dispatch(actions.checkOut({ amount: total, cartId: section.cartId }));
    dispatch(actions.createOrder({ cartId: section.cartId, deliveryAddress }));
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
        <Text fontSize={fp(1.5)} fontStyle={'bold'}>
          Total price: {section.totalPrice.toFixed(2)} Birr
        </Text>
        <Text fontSize={fp(1.5)}>Quantity: {section.totalQuantity.toFixed(2)}</Text>
        <Text fontSize={fp(1.5)}>Delivery Fee: {section.deliveryFee.toFixed(2)} Birr</Text>
        <Text fontSize={fp(1.5)}>
          Total: {section.totalPrice.toFixed(2)} + {section.deliveryFee.toFixed(2)} ={' '}
          {total.toFixed(2)} Birr
        </Text>
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
