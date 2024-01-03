import Map from './component/Map';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNearbyPharmacySlice } from './slice';
import * as select from './slice/selector';
import { HomeStackScreenProps } from '../../../navigation/types';
import { View, Text, StyleSheet } from 'react-native';
import PharmacyList from './component/PharmacyList';
import { Ipharmacies } from './slice/types';

function Home({ navigation, route }: HomeStackScreenProps<'Home'>) {
  // const { actions } = useNearbyPharmacySlice();
  // const dispatch = useDispatch();
  // const searchParams = {
  //   location: '7.6123, 38.9557',
  //   drugName: 'F',
  //   //name: 'Rober',
  // };

  // useEffect(() => {
  //   dispatch(actions.getNearbyPharmacies({ pageState: { page: 1, limit: 20, ...searchParams } }));
  // }, [dispatch, actions]);

  // const data = useSelector(select.selectPharmacies);
  const data: Ipharmacies[] = [
    {
      _id: '657711b99f521e451a49933c',
      location: [38.9557, 7.6123],
      name: 'Buckridge - Bartoletti',
      logo: 'https://picsum.photos/seed/VV2Qmrm/100/100',
      distance: 0,
      drug: {
        _id: '657711b99f521e451a49939a',
        name: 'Fantastic Plastic Sausages',
        stockLevel: 1421,
      },
    },
    {
      _id: '657711b99f521e451a49934e',
      location: [37.4645, 6.3816],
      name: 'Hartmann - Lueilwitz',
      logo: 'https://picsum.photos/seed/LDQ5zgYY5/100/100',
      distance: 214.28,
      drug: {
        _id: '657711b99f521e451a499398',
        name: 'Awesome Frozen Car',
        stockLevel: 6926,
      },
    },
    {
      _id: '657711b99f521e451a49934e',
      location: [37.4645, 6.3816],
      name: 'Hartmann - Lueilwitz',
      logo: 'https://picsum.photos/seed/LDQ5zgYY5/100/100',
      distance: 214.28,
      drug: {
        _id: '657711b99f521e451a499390',
        name: 'Rustic Steel Shoes',
        stockLevel: 6126,
      },
    },
    {
      _id: '657711b99f521e451a49934e',
      location: [37.4645, 6.3816],
      name: 'Hartmann - Lueilwitz',
      logo: 'https://picsum.photos/seed/LDQ5zgYY5/100/100',
      distance: 214.28,
      drug: {
        _id: '657711b99f521e451a4993c0',
        name: 'Awesome Frozen Shirt',
        stockLevel: 6690,
      },
    },
    {
      _id: '657711b99f521e451a499352',
      location: [41.1156, 7.9472],
      name: 'Kessler - Block',
      logo: 'https://picsum.photos/seed/QfgTVtNHhj/100/100',
      distance: 241.12,
      drug: {
        _id: '657711b99f521e451a49938c',
        name: 'Bespoke Metal Chips',
        stockLevel: 5327,
      },
    },
    {
      _id: '657711b99f521e451a499336',
      location: [38.0576, 5.5326],
      name: 'Greenholt - Schumm',
      logo: 'https://picsum.photos/seed/YWB56de/100/100',
      distance: 251.91,
      drug: {
        _id: '657711b99f521e451a4993b4',
        name: 'Small Wooden Chair',
        stockLevel: 549,
      },
    },
    {
      _id: '657711b99f521e451a499336',
      location: [38.0576, 5.5326],
      name: 'Greenholt - Schumm',
      logo: 'https://picsum.photos/seed/YWB56de/100/100',
      distance: 251.91,
      drug: {
        _id: '657711b99f521e451a4993ba',
        name: 'Unbranded Cotton Shirt',
        stockLevel: 5197,
      },
    },
    {
      _id: '657711b99f521e451a499356',
      location: [41.583, 7.3511],
      name: 'Mertz, Cartwright and Walter',
      logo: 'https://picsum.photos/seed/z7azEU9/100/100',
      distance: 291.43,
      drug: {
        _id: '657711b99f521e451a4993a2',
        name: 'Generic Granite Soap',
        stockLevel: 8985,
      },
    },
    {
      _id: '657711b99f521e451a499356',
      location: [41.583, 7.3511],
      name: 'Mertz, Cartwright and Walter',
      logo: 'https://picsum.photos/seed/z7azEU9/100/100',
      distance: 291.43,
      drug: {
        _id: '657711b99f521e451a4993ac',
        name: 'Electronic Frozen Mouse',
        stockLevel: 6402,
      },
    },
    {
      _id: '657711b99f521e451a499364',
      location: [38.3379, 4.8584],
      name: 'Bashirian and Sons',
      logo: 'https://picsum.photos/seed/RVOvYiLv0/100/100',
      distance: 314.09,
      drug: {
        _id: '657711b99f521e451a499394',
        name: 'Tasty Frozen Shoes',
        stockLevel: 885,
      },
    },
  ];

  // console.log('---------index.tsx', data);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map />
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
