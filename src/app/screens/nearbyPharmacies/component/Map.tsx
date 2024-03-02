import React from 'react';
import { Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ipharmacies } from '../slice/types';
import { Flex } from '../../../components/Basic';

interface IMapProps {
  pharmacies: Ipharmacies[];
  region: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  userLocation: string[];
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
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height / 3,
        }}
        region={region}
      >
        {userLocation.length > 0 && (
          <Marker
            coordinate={{
              latitude: Number(userLocation[0]),
              longitude: Number(userLocation[1]),
            }}
            title="You are here"
            onPress={() => {
              setRegion({
                latitude: Number(userLocation[0]),
                longitude: Number(userLocation[1]),
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
