import React, { useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import DrugItemCard from './DrugItemCard';
import { Idrug } from '../slice/types';
import { Flex, Text } from '../../../components/Basic';
import { useSelector } from 'react-redux';
import * as select from '../slice/selector';
import { theme } from '../../../../utils/theme/theme';
import { fp, hp } from '../../../../utils/constants';

interface IDrugListProps {
  nextPage: number;
  setNextPage: (page: number) => void;
  drugs?: Idrug[];
}

function DrugLists({ drugs, nextPage, setNextPage }: IDrugListProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const isLoading = useSelector(select.selectIsSearching);
  const data = useSelector(select.selectSearchResult);

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
    <Flex flex={1} alignItems={'center'} backgroundColor={'#fff'}>
      <FlatList
        data={drugs}
        refreshing={isRefreshing}
        onRefresh={handleOnRefresh}
        renderItem={({ item }) => <DrugItemCard drug={item} />}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={handleOnEndReached}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          isLoading ? <ActivityIndicator size="large" color={theme.colors.primary[500]} /> : null
        }
        ListEmptyComponent={
          !isLoading ? (
            <Text textAlign="center" fontSize={fp(2)} color="gray" mt={hp(20)}>
              No drug found
            </Text>
          ) : null
        }
      />
    </Flex>
  );
}

export default DrugLists;
