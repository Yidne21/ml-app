import React, { useRef } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Ipharmacies } from '../slice/types';
import PharmacyCard from './PharmacyCard';
import { Box, Flex, Text } from '../../../components/Basic';
import Map from './Map';
import { fp, hp } from '../../../../utils/constants';
import { theme } from '../../../../utils/theme/theme';
import { useSelector } from 'react-redux';
import * as select from '../slice/selector';

interface IPharmacyListProps {
  pharmacies: Ipharmacies[];
  setRegion: (region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }) => void;
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  userLocation: number[];
  setNextPage: (page: number) => void;
  nextPage: number;
}

function PharmacyList({
  pharmacies,
  setRegion,
  region,
  userLocation,
  setNextPage,
  nextPage,
}: IPharmacyListProps) {
  const flatListRef = useRef<FlatList<Ipharmacies>>(null);
  const isLoading = useSelector(select.selectIsLoading);
  const data = useSelector(select.selectPharmacies);
  const [isRefreshing, setIsRefreshing] = React.useState(false);

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

  function renderHeader() {
    return (
      <Flex backgroundColor="#fff" flex={1}>
        <Box marginBottom={10}>
          <Map
            pharmacies={pharmacies}
            region={region}
            userLocation={userLocation}
            setRegion={setRegion}
          />
        </Box>
        <Text fontSize={fp(3)} fontWeight="bold" px={15}>
          Nearby Pharmacies
        </Text>
      </Flex>
    );
  }

  return (
    <Flex flex={1}>
      <FlatList
        ref={flatListRef}
        ListHeaderComponent={renderHeader}
        refreshing={isRefreshing}
        onRefresh={handleOnRefresh}
        data={pharmacies}
        renderItem={({ item }) => (
          <PharmacyCard pharmacy={item} setRegion={setRegion} flatListRef={flatListRef} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id.toString()}
        onEndReached={handleOnEndReached}
        ListFooterComponent={
          isLoading ? <ActivityIndicator size="large" color={theme.colors.primary[500]} /> : null
        }
        ListEmptyComponent={
          <Text textAlign="center" fontSize={fp(2)} color="gray" mt={hp(20)}>
            No pharmacies found
          </Text>
        }
      />
    </Flex>
  );
}

export default PharmacyList;
