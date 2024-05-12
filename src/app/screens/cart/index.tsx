import React from 'react';
import Header from '../../components/Custom/Header';
import { Button, Flex, Text } from '../../components/Basic';
import { SectionList } from 'react-native';
import SectionHeader from './component/SectionHeader';
import ItemCard from './component/ItemCard';
import { theme } from '../../../utils/theme/theme';
import { wp, fp } from '../../../utils/constants';

const carts = {
  totalDocuments: 3,
  totalPages: 1,
  data: [
    {
      _id: '66409c86ec47635d0fb0dbac',
      userId: '663fce5c4d86e74638f2d68e',
      pharmacyId: '66309b7668c23227d905c742',
      pharmacyName: 'Family Pharmacy',
      drugs: [
        {
          quantity: 4,
          _id: '66409c86ec47635d0fb0dbad',
          drugId: '66309b7668c23227d905c785',
          stockId: '66309b7768c23227d905c814',
          price: 633,
          drugName: 'Thyroxine',
        },
      ],
      totalPrice: 2532,
      totalQuantity: 4,
      createdAt: '2024-05-12T10:40:06.662Z',
      updatedAt: '2024-05-12T10:58:51.050Z',
      __v: 0,
    },
    {
      _id: '66409e0dec47635d0fb0dbc1',
      userId: '663fce5c4d86e74638f2d68e',
      pharmacyId: '66309b7668c23227d905c74e',
      pharmacyName: 'SunsetAvenue Pharmacy',
      drugs: [
        {
          quantity: 5,
          _id: '66409e0dec47635d0fb0dbc2',
          drugId: '66309b7668c23227d905c797',
          stockId: '66309b7668c23227d905c7bf',
          price: 228,
          drugName: 'Amphetamine',
        },
        {
          quantity: 2,
          _id: '6640a15bec47635d0fb0dbf2',
          drugId: '66309b7668c23227d905c772',
          stockId: '66309b7768c23227d905c811',
          price: 342,
          drugName: 'Gabapentin',
        },
        {
          quantity: 2,
          _id: '6640a15bec47635d0fb0dbf2',
          drugId: '66309b7668c23227d905c772',
          stockId: '66309b7768c23227d905c811',
          price: 342,
          drugName: 'Gabapentin',
        },
      ],
      totalPrice: 1140,
      totalQuantity: 5,
      createdAt: '2024-05-12T10:46:37.035Z',
      updatedAt: '2024-05-12T10:59:29.859Z',
      __v: 0,
    },
  ],
};

function Cart() {
  return (
    <Flex p={16} flex={1} backgroundColor={'#fff'}>
      <Header showRightIcon={true} />
      <SectionList
        sections={carts.data.map((cartItem) => ({
          title: cartItem.pharmacyName,
          totalPrice: cartItem.totalPrice,
          totalQuantity: cartItem.totalQuantity,
          data: cartItem.drugs,
        }))}
        renderItem={({ item }) => <ItemCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
        renderSectionHeader={({ section }) => <SectionHeader section={section} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <Text>Cart is empty</Text>}
        ListFooterComponent={() => <Text>End of cart</Text>}
        stickySectionHeadersEnabled={true}
        renderSectionFooter={() => (
          <Flex flexDirection="row" justifyContent="space-between" padding={10} gap={4}>
            <Button
              width="30%"
              backgroundColor={theme.colors.primary[500]}
              padding={wp(2)}
              borderRadius={10}
              alignItems="center"
            >
              <Text color="white" fontSize={fp(3)} fontStyle={'bold'}>
                Checkout
              </Text>
            </Button>
            <Button
              width="30%"
              backgroundColor={theme.colors.primary[500]}
              padding={wp(2)}
              borderRadius={10}
              alignItems="center"
            >
              <Text color="white" fontSize={fp(3)} fontStyle={'bold'}>
                Checkout
              </Text>
            </Button>
          </Flex>
        )}
        onEndReached={() => console.log('end reached')}
      />
    </Flex>
  );
}

export default Cart;
