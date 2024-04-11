import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Ipharmacies } from '../slice/types';
import { Flex } from '../../../components/Basic';
import { width, height } from '../../../../utils/constants';

interface IMapProps {
  pharmacies: Ipharmacies[];
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  userLocation: number[];
  setRegion: (region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }) => void;
}

export default function Map({ pharmacies, region, userLocation, setRegion }: IMapProps) {
  console.log(userLocation, 'userLocation');
  return (
    <Flex flex={1}>
      <MapView
        style={{
          width: width,
          height: height / 3,
        }}
        region={region}
      >
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation[0],
              longitude: userLocation[1],
            }}
            title="You are here"
            onPress={() => {
              setRegion({
                latitude: userLocation[0],
                longitude: userLocation[1],
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              });
            }}
          />
        )}
        {pharmacies.map((pharmacy) => (
          <Marker
            key={pharmacy._id}
            coordinate={{
              latitude: pharmacy.location.coordinates[1],
              longitude: pharmacy.location.coordinates[0],
            }}
            title={pharmacy.name}
          />
        ))}
      </MapView>
    </Flex>
  );
}
