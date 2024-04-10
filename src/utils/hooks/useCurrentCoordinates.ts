import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export default function useCurrentCoordinates() {
  const [location, setLocation] = useState<[number, number]>();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      const locationObject = await Location.getCurrentPositionAsync({});

      setLocation([locationObject.coords.latitude, locationObject.coords.longitude]);
    })();
  }, []);

  return location;
}
