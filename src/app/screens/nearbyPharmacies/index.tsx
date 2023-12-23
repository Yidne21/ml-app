import Map from './component/Map';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNearbyPharmacySlice } from './slice';
import * as select from './slice/selector';
import { HomeStackScreenProps } from '../../../navigation/types';
import { View, StyleSheet } from 'react-native';
import PharmacyList from './component/PharmacyList';

function Home({ navigation, route }: HomeStackScreenProps<'Home'>) {
  const { actions } = useNearbyPharmacySlice();
  const dispatch = useDispatch();
  const data = useSelector(select.selectPharmacies);

  const searchParams = {
    location: '7.6123, 38.9557',
    drugName: 'F',
    //name: 'Rober',
  };

  useEffect(() => {
    dispatch(actions.getNearbyPharmacies({ pageState: { page: 1, limit: 20, ...searchParams } }));
  }, [dispatch, actions]);

  console.log('---------index.tsx', data);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <PharmacyList pharmacies={data.pharmacies} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    flex: 1,
    marginBottom: 20,
  },
});

export default Home;
