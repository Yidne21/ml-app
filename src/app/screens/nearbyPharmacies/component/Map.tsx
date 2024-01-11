import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { theme } from '../../../../utils/theme/theme';
import * as Location from 'expo-location';
import { Ipharmacies } from '../slice/types';

export default function Map({ pharmacies }: { pharmacies: Ipharmacies[] }) {
  const [location, setLocation] = useState([9.145, 40.4897]);
  const [initialRender, setInitialRender] = useState(true);
  const [region, setRegion] = useState({
    latitude: 9.145,
    longitude: 40.4897,
    latitudeDelta: 10,
    longitudeDelta: 10,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const userLocation = await Location.getCurrentPositionAsync({});
      setLocation(
        [userLocation.coords.latitude, userLocation.coords.longitude] || [8.220573, 37.798139],
      );
      if (userLocation && initialRender) {
        setRegion({
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        });
        setInitialRender(false);
      }
    })();
  }, [initialRender]);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
      >
        {location && !initialRender && (
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
