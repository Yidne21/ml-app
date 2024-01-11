import Map from './component/Map';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNearbyPharmacySlice } from './slice';
import * as select from './slice/selector';
import { HomeStackScreenProps } from '../../../navigation/types';
import { View, Text, StyleSheet } from 'react-native';
import PharmacyList from './component/PharmacyList';
import { Ipharmacies } from './slice/types';
import useCurrentLocation from '../../../utils/hooks/useCurrentLocation';

function Home({ navigation, route }: HomeStackScreenProps<'Home'>) {
  const location = useCurrentLocation() || '8.220573, 37.798139';
  console.log('nearbyhome----', location);
  const { actions } = useNearbyPharmacySlice();
  const dispatch = useDispatch();
  const searchParams = {
    location,
    drugName: 'F',
    //name: 'Rober',
  };

  useEffect(() => {
    dispatch(actions.getNearbyPharmacies({ pageState: { page: 1, limit: 20, ...searchParams } }));
  }, [dispatch, actions, searchParams]);

  // const data = useSelector(select.selectPharmacies);
  const data: Ipharmacies[] = [
    {
      _id: '65912f9a5b03b71ab47c5885',
      location: {
        coordinates: [39.0916, 7.4854],
        type: 'Point',
      },
      name: 'Bosco - Connelly',
      logo: 'https://picsum.photos/seed/f1SIpn/100/100',
      distance: 20.6,
    },
    {
      _id: '65912f9a5b03b71ab47c5877',
      location: {
        coordinates: [39.3535, 6.7853],
        type: 'Point',
      },
      name: 'Botsford, Durgan and Jakubowski',
      logo: 'https://picsum.photos/seed/EI1aG5/100/100',
      distance: 102.01,
    },
    {
      _id: '65912f9a5b03b71ab47c5889',
      location: {
        coordinates: [39.7629, 8.3346],
        type: 'Point',
      },
      name: 'Crooks - Conn',
      logo: 'https://picsum.photos/seed/KRa9nXV2k/100/100',
      distance: 119.93,
    },
    {
      _id: '65912f9a5b03b71ab47c586f',
      location: {
        coordinates: [38.5277, 6.1803],
        type: 'Point',
      },
      name: 'Koss and Sons',
      logo: 'https://picsum.photos/seed/nhnMS7/100/100',
      distance: 166.28,
    },
    {
      _id: '65912f9a5b03b71ab47c5883',
      location: {
        coordinates: [37.3541, 8.5361],
        type: 'Point',
      },
      name: 'Jerde LLC',
      logo: 'https://picsum.photos/seed/909e8a1/100/100',
      distance: 204.29,
    },
    {
      _id: '65912f9a5b03b71ab47c588f',
      location: {
        coordinates: [36.6086, 6.7731],
        type: 'Point',
      },
      name: 'Kling Group',
      logo: 'https://picsum.photos/seed/0HtBlt/100/100',
      distance: 275.54,
    },
    {
      _id: '65912f9a5b03b71ab47c586b',
      location: {
        coordinates: [36.8092, 6.3384],
        type: 'Point',
      },
      name: 'Lesch - Abshire',
      logo: 'https://picsum.photos/seed/YuJzt/100/100',
      distance: 276.33,
    },
    {
      _id: '65912f9a5b03b71ab47c5863',
      location: {
        coordinates: [39.7778, 10.0223],
        type: 'Point',
      },
      name: 'Bahringer - Carroll',
      logo: 'https://picsum.photos/seed/CNvXyz/100/100',
      distance: 283.11,
    },
    {
      _id: '65912f9a5b03b71ab47c588d',
      location: {
        coordinates: [40.3866, 9.7308],
        type: 'Point',
      },
      name: 'Gutkowski LLC',
      logo: 'https://picsum.photos/seed/28dxyRgx/100/100',
      distance: 283.56,
    },
    {
      _id: '65912f9a5b03b71ab47c5893',
      location: {
        coordinates: [40.9788, 5.5065],
        type: 'Point',
      },
      name: 'Pagac - Kozey',
      logo: 'https://picsum.photos/seed/1cRmAQj/100/100',
      distance: 324.04,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map pharmacies={data} />
      </View>
      <View style={styles.pharmacies}>
        <Text style={styles.header}>Nearby Pharmacies</Text>
        <PharmacyList pharmacies={data} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  mapContainer: {
    marginBottom: 260,
  },
  pharmacies: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
    padding: 10,
  },
});

export default Home;
