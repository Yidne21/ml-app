import React, { useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Iorder } from '../slice/types';
import OrderCard from './OrderCard';
import { Flex, Text } from '../../../components/Basic';
import { fp, hp } from '../../../../utils/constants';
import { theme } from '../../../../utils/theme/theme';
import { useSelector } from 'react-redux';
import * as select from '../slice/selector';

interface IPharmacyListProps {
  orders: Iorder[];
  setNextPage: (page: number) => void;
  nextPage: number;
}

function OrderList({ orders, setNextPage, nextPage }: IPharmacyListProps) {
  const isLoading = useSelector(select.selectIsLoadingOrders);
  const data = useSelector(select.selectOrders);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleOnEndReached = () => {
    if (nextPage + 1 > data.totalPages || isLoading) {
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
    <Flex flex={1}>
      <FlatList
        refreshing={isRefreshing}
        onRefresh={handleOnRefresh}
        data={orders}
        renderItem={({ item }) => <OrderCard order={item} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id.toString()}
        onEndReached={handleOnEndReached}
        ListFooterComponent={
          isLoading ? <ActivityIndicator size="large" color={theme.colors.primary[500]} /> : null
        }
        ListEmptyComponent={
          !isLoading ? (
            <Text textAlign="center" fontSize={fp(2)} color="gray" mt={hp(10)}>
              No order found
            </Text>
          ) : null
        }
      />
    </Flex>
  );
}

export default OrderList;
