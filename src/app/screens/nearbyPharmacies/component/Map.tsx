import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ipharmacies } from '../slice/types';
import useCurrentCoordinates from '../../../../utils/hooks/useCurrentCoordinates';

export default function Map({ pharmacies }: { pharmacies: Ipharmacies[] }) {
  const currentLocation = useCurrentCoordinates();
  const [location, setLocation] = useState([9.145, 40.4897]);
  const [initialRender, setInitialRender] = useState(true);
  const [region, setRegion] = useState({
    latitude: 9.145,
    longitude: 40.4897,
    latitudeDelta: 10,
    longitudeDelta: 10,
  });

  useEffect(() => {
    if (currentLocation) {
      setLocation(currentLocation);
      setRegion({
        latitude: currentLocation[0],
        longitude: currentLocation[1],
        latitudeDelta: 5,
        longitudeDelta: 5,
      });
    }
    setInitialRender(false);
  }, [currentLocation, initialRender]);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location[0],
              longitude: location[1],
            }}
            title="You are here"
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
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
  },
});
