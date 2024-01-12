import Map from './component/Map';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNearbyPharmacySlice } from './slice';
import * as select from './slice/selector';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import PharmacyList from './component/PharmacyList';
import useCurrentLocation from '../../../utils/hooks/useCurrentLocation';
import { theme } from '../../../utils/theme/theme';

function Home() {
  const location = useCurrentLocation() || '8.220573, 37.798139';
  const { actions } = useNearbyPharmacySlice();
  const dispatch = useDispatch();
  const data = useSelector(select.selectPharmacies);
  const isLoaded = useSelector(select.selectIsLoaded);
  const isLoading = useSelector(select.selectIsLoading);
  const [Location, setLocation] = useState(location);

  useEffect(() => {
    dispatch(
      actions.getNearbyPharmacies({ pageState: { page: 1, limit: 20, location: Location } }),
    );
  }, [dispatch, actions, location, Location]);

  return (
    <View style={styles.container}>
      {isLoaded && (
        <>
          <View style={styles.mapContainer}>
            <Map pharmacies={data.pharmacies} />
          </View>
          <View style={styles.pharmacies}>
            <Text style={styles.header}>Nearby Pharmacies</Text>
            <PharmacyList pharmacies={data.pharmacies} />
          </View>
        </>
      )}
      {isLoading && (
        <ActivityIndicator size="large" color={theme.colors.primary[500]} style={styles.loader} />
      )}
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
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});

export default Home;
