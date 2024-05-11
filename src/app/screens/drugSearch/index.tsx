import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import FilterBar from './component/FilterBar';
import SearchBar from './component/SearchBar';
import { theme } from '../../../utils/theme/theme';
import DrugLists from './component/DrugLists';
import Header from '../../components/Custom/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useDrugSearchScreenSlice } from './slice';
import * as select from './slice/selector';
import useCurrentLocation from '../../../utils/hooks/useCurrentLocation';
import { HomeStackScreenProps } from '../../../navigation/types';
import { Flex, Button } from '../../components/Basic';

function DrugSearch({ route }: HomeStackScreenProps<'DrugSearch'>) {
  const { pharmacyId } = route.params || '';
  const currentLocation = useCurrentLocation() || '8.220573, 37.798139';
  const [showFilterBar, setShowFilterBar] = useState(false);
  const [drugName, setDrugName] = useState('');
  const [location, setLocation] = useState(currentLocation);
  const [priceRange, setPriceRange] = useState([5, 10000]);
  const [category, setCategory] = useState('');
  const serarchResult = useSelector(select.selectSearchResult);
  const { actions } = useDrugSearchScreenSlice();
  const dispatch = useDispatch();
  const [nextPage, setNextPage] = useState(1);

  const handleFilterIconClick = () => {
    setShowFilterBar(!showFilterBar);
  };

  const handleFilterCloseClick = () => {
    setShowFilterBar(false);
  };

  const handleKeyPress = useCallback(() => {
    setNextPage(1);
    dispatch(
      actions.getSearchedDrug({
        pageState: {
          page: nextPage,
          limit: 10,
          location: location,
          drugName: drugName || undefined,
        },
      }),
    );
  }, [dispatch, actions, nextPage, location, drugName]);

  const handeleApplyFilter = () => {
    setNextPage(1);
    dispatch(
      actions.getSearchedDrug({
        pageState: {
          page: nextPage,
          limit: 10,
          location: location,
          category: category || undefined,
          maxPrice: priceRange[1],
          minPrice: priceRange[0],
        },
      }),
    );
  };

  useEffect(() => {
    dispatch(
      actions.getSearchedDrug({
        pageState: {
          page: nextPage,
          limit: 10,
          location: location,
          pharmacyId: pharmacyId,
          drugName: drugName || undefined,
        },
      }),
    );
  }, [actions, dispatch, drugName, location, nextPage, pharmacyId]);

  return (
    <Flex flex={1} backgroundColor={'#fff'} p={16}>
      <Header showRightIcon={true} />
      <SearchBar drugName={drugName} setDrugName={setDrugName} handelKeyPress={handleKeyPress} />
      <Flex alignSelf={'flex-end'} marginRight={20} mt={10}>
        <Button
          onPress={showFilterBar ? handleFilterCloseClick : handleFilterIconClick}
          backgroundColor={theme.shadows.sm}
          borderRadius={10}
        >
          <MaterialIcons
            name={showFilterBar ? 'close' : 'filter-list'}
            size={30}
            color={theme.colors.primary[700]}
          />
        </Button>
      </Flex>
      {showFilterBar && (
        <FilterBar
          location={location}
          category={category}
          priceRange={priceRange}
          setLocation={setLocation}
          setCategory={setCategory}
          setPriceRange={setPriceRange}
          handleApplyFilter={handeleApplyFilter}
          setNextPage={setNextPage}
        />
      )}
      <Flex mt={10} width={Dimensions.get('window').width - 50} alignSelf={'flex-start'}></Flex>
      <DrugLists drugs={serarchResult?.data} nextPage={nextPage} setNextPage={setNextPage} />
    </Flex>
  );
}

export default DrugSearch;
