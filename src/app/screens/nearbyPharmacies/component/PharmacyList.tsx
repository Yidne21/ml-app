import React from 'react';
import { FlatList } from 'react-native';
import { Ipharmacies } from '../slice/types';
import PharmacyCard from './PharmacyCard';
import { Box, Flex, Text } from '../../../components/Basic';
import Map from './Map';
import { fp } from '../../../../utils/constants';

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
}

function PharmacyList({ pharmacies, setRegion, region, userLocation }: IPharmacyListProps) {
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
        ListHeaderComponent={renderHeader}
        data={pharmacies}
        renderItem={({ item }) => <PharmacyCard pharmacy={item} setRegion={setRegion} />}
        showsVerticalScrollIndicator={false}
      />
    </Flex>
  );
}

export default PharmacyList;
