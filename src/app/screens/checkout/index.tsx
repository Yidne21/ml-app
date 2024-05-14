import React from 'react';
import { Flex } from '../../components/Basic';
import { useSelector } from 'react-redux';
import * as selectors from '../cart/slice/selector';
import { WebView } from 'react-native-webview';
import { ActivityIndicator } from 'react-native';
import { theme } from '../../../utils/theme/theme';

function CheckOut() {
  const isCheckoutLoading = useSelector(selectors.selectIsCheckOutLoading);
  const checkOutUrl = useSelector(selectors.selectCheckOutUrl);

  return (
    <Flex flex={1} backgroundColor={'#fff'}>
      {isCheckoutLoading ? (
        <ActivityIndicator size="large" color={theme.colors.primary[500]} />
      ) : (
        <WebView source={{ uri: checkOutUrl }} style={{ flex: 1 }} />
      )}
    </Flex>
  );
}

export default CheckOut;
