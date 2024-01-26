import React, { useCallback, useEffect, useState } from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
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
function DrugSearch({ route }: HomeStackScreenProps<'DrugSearch'>) {
  const { name } = route.params || '';
  const currentLocation = useCurrentLocation() || '8.220573, 37.798139';
  const [showFilterBar, setShowFilterBar] = useState(false);
  const [drugName, setDrugName] = useState('');
  const [location, setLocation] = useState(currentLocation);
  const [priceRange, setPriceRange] = useState([5, 10000]);
  const [category, setCategory] = useState('');
  const [pharmacy, setPharmacy] = useState(name);

  const serarchResult = useSelector(select.selectSearchResult);
  const isSearching = useSelector(select.selectIsSearching);
  const { actions } = useDrugSearchScreenSlice();
  const dispatch = useDispatch();

  const handleFilterIconClick = () => {
    setShowFilterBar(!showFilterBar);
  };

  const handleFilterCloseClick = () => {
    setShowFilterBar(false);
  };

  const handleKeyPress = useCallback(() => {
    console.log('Enter key pressed');
    dispatch(
      actions.getSearchedDrug({
        pageState: {
          page: 1,
          limit: 20,
          location,
          name: pharmacy,
          drugName,
          category,
          maxPrice: priceRange[1],
          minPrice: priceRange[0],
        },
      }),
    );
  }, [actions, dispatch, location, pharmacy, drugName, category, priceRange]);

  const handeleApplyFilter = () => {
    dispatch(
      actions.getSearchedDrug({
        pageState: {
          page: 1,
          limit: 30,
          location,
          name: pharmacy,
          category,
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
          page: 1,
          limit: 30,
          location,
          name: pharmacy,
        },
      }),
    );
  }, [actions, dispatch, location, pharmacy]);

  return (
    <View style={styles.container}>
      <Header showRightIcon={true} />
      <SearchBar drugName={drugName} setDrugName={setDrugName} handelKeyPress={handleKeyPress} />
      <View style={styles.filter}>
        <TouchableOpacity
          onPress={showFilterBar ? handleFilterCloseClick : handleFilterIconClick}
          style={styles.icon}
        >
          <MaterialIcons
            name={showFilterBar ? 'close' : 'filter-list'}
            size={30}
            color={theme.colors.primary[700]}
          />
        </TouchableOpacity>
      </View>
      {showFilterBar && (
        <FilterBar
          location={location}
          category={category}
          priceRange={priceRange}
          pharmacy={pharmacy}
          setLocation={setLocation}
          setCategory={setCategory}
          setPriceRange={setPriceRange}
          setPharmacy={setPharmacy}
          handleApplyFilter={handeleApplyFilter}
        />
      )}
      <View style={styles.header}></View>
      <DrugLists data={serarchResult?.drugs} />
      {isSearching && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={theme.colors.primary[500]} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  filter: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 10,
  },
  icon: {
    backgroundColor: theme.shadows.sm,
    borderRadius: 10,
  },
  header: {
    marginTop: 10,
    width: Dimensions.get('window').width - 50,
    aliginSelf: 'flex-start',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    marginLeft: 5,
    color: theme.colors.primary[900],
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});

export default DrugSearch;
