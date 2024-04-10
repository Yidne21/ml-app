import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export default function useCurrentLocation() {
  const [location, setLocation] = useState('8.220573, 37.798139');
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const locationObject = await Location.getCurrentPositionAsync({});
      const stringlocation = JSON.stringify(
        locationObject.coords.latitude + ', ' + locationObject.coords.longitude,
      );
      setLocation(stringlocation);
    })();
  }, []);

  return location;
}
