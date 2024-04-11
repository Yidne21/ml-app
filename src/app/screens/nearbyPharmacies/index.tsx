import Map from './component/Map';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNearbyPharmacySlice } from './slice';
import * as select from './slice/selector';
import { ActivityIndicator } from 'react-native';
import PharmacyList from './component/PharmacyList';
// import useCurrentLocation from '../../../utils/hooks/useCurrentLocation';
import { theme } from '../../../utils/theme/theme';
import { Box, Flex, Text } from '../../components/Basic';
import { width } from '../../../utils/constants';
import useCurrentCoordinates from '../../../utils/hooks/useCurrentCoordinates';

function Home() {
  const location = useCurrentCoordinates();
  const { actions } = useNearbyPharmacySlice();
  const dispatch = useDispatch();
  const data = useSelector(select.selectPharmacies);
  const isLoaded = useSelector(select.selectIsLoaded);
  const isLoading = useSelector(select.selectIsLoading);
  const [Location, setLocation] = useState<[number, number]>([9.145, 40.4897]);

  const [region, setRegion] = useState({
    latitude: Location[0],
    longitude: Location[1],
    latitudeDelta: 10,
    longitudeDelta: 10,
  });

  useEffect(() => {
    if (location) {
      dispatch(
        actions.getNearbyPharmacies({
          pageState: { page: 1, limit: 30, location: `${location[0]}, ${location[1]}` },
        }),
      );

      setLocation(location);
    }
    setRegion({
      latitude: Location[0],
      longitude: Location[1],
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  }, [dispatch, actions, location, Location]);

  return (
    <Flex flex={1} backgroundColor="#fff">
      {isLoaded && (
        <>
          <Box marginBottom={260}>
            <Map
              pharmacies={data.data}
              region={region}
              userLocation={Location}
              setRegion={setRegion}
            />
          </Box>
          <Flex flex={1} backgroundColor="#fff" width={width}>
            <Text fontSize={20} fontWeight="bold" margin={16} padding={10}>
              Nearby Pharmacies
            </Text>
            <PharmacyList pharmacies={data.data} setRegion={setRegion} />
          </Flex>
        </>
      )}
      {isLoading && (
        <ActivityIndicator
          size="large"
          color={theme.colors.primary[500]}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        />
      )}
    </Flex>
  );
}

export default Home;
