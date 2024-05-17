import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOrderSlice } from './slice';
import * as select from './slice/selector';
import OrderList from './component/OrderList';
import { Flex, Text } from '../../components/Basic';
import { fp } from '../../../utils/constants';

function MyOrder() {
  const { actions } = useOrderSlice();
  const dispatch = useDispatch();
  const data = useSelector(select.selectOrders);
  const [nextPage, setNextPage] = useState(1);
  const isConfirming = useSelector(select.selectIsConfirmingOrder);
  const isExtending = useSelector(select.selectIsExtendingOrder);
  const isRefunding = useSelector(select.selectIsRequestingRefund);

  useEffect(() => {
    dispatch(
      actions.getOrders({
        pageState: { page: 1, limit: 10 },
      }),
    );
  }, [dispatch, actions, nextPage, data.totalDocuments, isConfirming, isExtending, isRefunding]);

  return (
    <Flex flex={1} backgroundColor="#fff">
      <Text fontSize={fp(2)} fontWeight="bold" px={15} py={10}>
        My orders
      </Text>
      <OrderList orders={data.data} setNextPage={setNextPage} nextPage={nextPage} />
    </Flex>
  );
}

export default MyOrder;
