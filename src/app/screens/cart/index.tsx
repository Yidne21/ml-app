import React, { useEffect, useState } from 'react';
import Header from '../../components/Custom/Header';
import { Flex, Text } from '../../components/Basic';
import { ActivityIndicator, SectionList } from 'react-native';
import SectionHeader from './component/SectionHeader';
import ItemCard from './component/ItemCard';
import { theme } from '../../../utils/theme/theme';
import * as select from './slice/selector';
import { useSelector, useDispatch } from 'react-redux';
import { useCartDtailScreenSlice } from './slice';
// import { RootStackScreenProps } from '../../../navigation/types';

function Cart() {
  const { actions } = useCartDtailScreenSlice();
  const dispatch = useDispatch();
  const cartsData = useSelector(select.selectCart);
  const isLoading = useSelector(select.selectIsLoading);
  const [nextPage, setNextPage] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const isCheckoutLoading = useSelector(select.selectIsCheckOutLoading);
  const isCreatingOrder = useSelector(select.selectIsOrderCreating);

  useEffect(() => {
    dispatch(
      actions.getCart({
        pageState: {
          page: nextPage,
          limit: 10,
        },
      }),
    );
  }, [actions, dispatch, nextPage]);

  const handleOnEndReached = () => {
    if (nextPage + 1 > cartsData.totalPages || isLoading) {
      return;
    }
    const newPage = nextPage + 1;
    setNextPage(newPage);
  };

  const handleOnRefresh = () => {
    if (isLoading) {
      return;
    }

    if (nextPage - 1 < 1) {
      setIsRefreshing(false);
      return;
    }
    const newPage = nextPage - 1;
    setNextPage(newPage);
  };
  return (
    <Flex p={16} flex={1} backgroundColor={'#fff'}>
      <Header showRightIcon={true} />
      {!isLoading && (
        <SectionList
          sections={cartsData.data.map((cartItem) => ({
            cartId: cartItem._id,
            title: cartItem.pharmacyName,
            totalPrice: cartItem.totalPrice,
            totalQuantity: cartItem.totalQuantity,
            deliveryFee: cartItem.deliveryFee || 0,
            data: cartItem.drugs,
          }))}
          renderItem={({ item }) => <ItemCard item={item} />}
          keyExtractor={(item, index) => index.toString()}
          renderSectionHeader={({ section }) => {
            return isCheckoutLoading && section.cartId.toString() === isCreatingOrder ? (
              <ActivityIndicator size="large" color={theme.colors.primary[500]} />
            ) : (
              <SectionHeader section={section} />
            );
          }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <Text>Cart is empty</Text>}
          ItemSeparatorComponent={() => <Flex height={5} backgroundColor={theme.colors.white} />}
          onRefresh={handleOnRefresh}
          stickySectionHeadersEnabled={true}
          refreshing={isRefreshing}
          onEndReached={handleOnEndReached}
        />
      )}
      {isLoading && <ActivityIndicator size="large" color={theme.colors.primary[500]} />}
    </Flex>
  );
}

export default Cart;
