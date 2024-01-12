import Map from './component/Map';
import React, { useEffect } from 'react';
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
  const isLoading = useSelector(select.selectIsLoading);
  const isLoaded = useSelector(select.selectIsLoaded);

  useEffect(() => {
    dispatch(actions.getNearbyPharmacies({ pageState: { page: 1, limit: 20, location } }));
  }, [dispatch, actions, location]);

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color={theme.colors.primary[500]} />}
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
