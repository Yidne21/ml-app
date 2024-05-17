import React from 'react';
import { Flex, Text, Box, Button } from '../../../components/Basic';
import { Iorder } from '../slice/types';
import { theme } from '../../../../utils/theme/theme';
import { wp, fp } from '../../../../utils/constants';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { useOrderSlice } from '../slice';
import * as select from '../slice/selector';
import { ActivityIndicator } from 'react-native';

interface IorderCardProps {
  order: Iorder;
}

function OrderCard({ order }: IorderCardProps) {
  const isConfirming = useSelector(select.selectIsConfirmingOrder);
  const isExtending = useSelector(select.selectIsExtendingOrder);
  const isRefunding = useSelector(select.selectIsRequestingRefund);
  const currentOrder = useSelector(select.selectCurrentOrder);
  const { actions } = useOrderSlice();
  const dispatch = useDispatch();

  const handleRefund = () => {
    dispatch(actions.refund({ orderId: order._id }));
  };

  const handleExtend = () => {
    dispatch(actions.extend({ orderId: order._id }));
  };

  const handleConfirm = () => {
    dispatch(actions.confirmOrder({ orderId: order._id }));
  };

  const renderRow = (label: string, value: string) => (
    <Flex flexDirection={'row'} mb={10}>
      <Text fontSize={16} fontWeight={'bold'} mr={10}>
        {label}:
      </Text>
      <Text fontSize={16}>{value}</Text>
    </Flex>
  );

  return (
    <Flex
      flexDirection="row"
      padding={'16px'}
      borderBottomWidth={1}
      borderBottomColor="#ccc"
      backgroundColor={'#fff'}
      alignItems={'center'}
      gap={3}
      width={wp(100)}
    >
      <Flex flex={1}>
        <Flex backgroundColor={theme.shadows.sm} p={10} borderRadius={10}>
          {renderRow('Order To', order.pharmacy.name)}
          {renderRow('Email', order.pharmacy.email)}
          {renderRow('Quantity', order.quantity.toString() + ' Drugs')}
          {renderRow('Total', order.totalAmount.toFixed(2).toString() + ' Birr')}
          {renderRow('Status', order.status)}

          {order.hasDelivery && (
            <>
              {renderRow(
                'Delivery Expire Date',
                format(new Date(order.deliveryExpireDate), 'dd/MM/yyyy'),
              )}
            </>
          )}
        </Flex>

        <Box flexDirection="row" alignItems={'center'} mb={'5px'} gap={10} mt={'8px'}>
          {order.status === 'inprogress' && (
            <Button
              px={'10px'}
              py={'5px'}
              borderWidth={1}
              borderColor={theme.colors.primary[300]}
              borderRadius={5}
              onPress={handleConfirm}
            >
              {isConfirming && currentOrder === order._id.toString() ? (
                <ActivityIndicator size={fp(3)} color={theme.colors.primary[500]} />
              ) : (
                <Text color="black" fontSize={fp(3)}>
                  Confirm
                </Text>
              )}
            </Button>
          )}
          {order.status === 'expired' && (
            <Button
              px={'15px'}
              py={'5px'}
              borderWidth={1}
              borderColor={theme.colors.primary[300]}
              borderRadius={5}
              onPress={handleExtend}
            >
              {isExtending && currentOrder === order._id.toString() ? (
                <ActivityIndicator size="small" color={theme.colors.primary[500]} />
              ) : (
                <Text color="black" fontSize={fp(3)}>
                  Extend
                </Text>
              )}
            </Button>
          )}
          {order.status === 'expired' ||
            (order.status === 'rejected' && (
              <Button
                px={'15px'}
                py={'5px'}
                borderWidth={1}
                borderColor={theme.colors.primary[300]}
                borderRadius={5}
                onPress={handleRefund}
              >
                {isRefunding && currentOrder === order._id.toString() ? (
                  <ActivityIndicator size="small" color={theme.colors.primary[500]} />
                ) : (
                  <Text color="black" fontSize={fp(3)}>
                    Refund
                  </Text>
                )}
              </Button>
            ))}
        </Box>
      </Flex>
    </Flex>
  );
}

export default OrderCard;
