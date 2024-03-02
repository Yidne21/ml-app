import Map from './component/Map';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNearbyPharmacySlice } from './slice';
import * as select from './slice/selector';
import { StyleSheet, ActivityIndicator } from 'react-native';
import PharmacyList from './component/PharmacyList';
import useCurrentLocation from '../../../utils/hooks/useCurrentLocation';
import { theme } from '../../../utils/theme/theme';
import { Box, Flex, Text } from '../../components/Basic';

function Home() {
  const location = useCurrentLocation() || '8.220573, 37.798139';
  const { actions } = useNearbyPharmacySlice();
  const dispatch = useDispatch();
  const data = useSelector(select.selectPharmacies);
  const isLoaded = useSelector(select.selectIsLoaded);
  const isLoading = useSelector(select.selectIsLoading);
  const [Location, setLocation] = useState(location);

  //map state
  const coord = location.split(',');
  const [region, setRegion] = useState({
    latitude: Number(coord[0]),
    longitude: Number(coord[1]),
    latitudeDelta: 10,
    longitudeDelta: 10,
  });

  useEffect(() => {
    dispatch(
      actions.getNearbyPharmacies({ pageState: { page: 1, limit: 30, location: Location } }),
    );
  }, [dispatch, actions, location, Location]);

  return (
    <Flex flex={1} backgroundColor="#fff">
      {isLoaded && (
        <>
          <Box marginBottom={260}>
            <Map
              pharmacies={data.data}
              region={region}
              userLocation={coord}
              setRegion={setRegion}
            />
          </Box>
          <Flex flex={1} backgroundColor="#fff">
            <Text fontSize={20} fontWeight="bold" margin={16} padding={10}>
              Nearby Pharmacies
            </Text>
            <PharmacyList pharmacies={data.data} setRegion={setRegion} />
          </Flex>
        </>
      )}
      {isLoading && (
        <ActivityIndicator size="large" color={theme.colors.primary[500]} style={styles.loader} />
      )}
    </Flex>
  );
}

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});

export default Home;
