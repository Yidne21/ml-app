import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNearbyPharmacySlice } from './slice';
import * as select from './slice/selector';
import PharmacyList from './component/PharmacyList';
import { Flex } from '../../components/Basic';
import useCurrentCoordinates from '../../../utils/hooks/useCurrentCoordinates';

function Home() {
  const location = useCurrentCoordinates();
  const { actions } = useNearbyPharmacySlice();
  const dispatch = useDispatch();
  const data = useSelector(select.selectPharmacies);
  const [Location, setLocation] = useState<[number, number]>([9.145, 40.4897]);
  const [nextPage, setNextPage] = useState(1);

  const [region, setRegion] = useState({
    latitude: Location[0],
    longitude: Location[1],
    latitudeDelta: 10,
    longitudeDelta: 10,
  });

  useEffect(() => {
    dispatch(
      actions.getNearbyPharmacies({
        pageState: { page: nextPage, limit: 10, location: `${Location[0]}, ${Location[1]}` },
      }),
    );

    if (location) {
      setLocation(location);
      setRegion({
        latitude: Location[0],
        longitude: Location[1],
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  }, [dispatch, actions, nextPage, location, Location, data.totalDocuments]);

  return (
    <Flex flex={1} backgroundColor="#fff">
      <PharmacyList
        pharmacies={data.data}
        setRegion={setRegion}
        region={region}
        userLocation={Location}
        setNextPage={setNextPage}
        nextPage={nextPage}
      />
    </Flex>
  );
}

export default Home;
