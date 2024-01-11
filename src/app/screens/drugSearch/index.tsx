import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import FilterBar from './component/FilterBar';
import SearchBar from './component/SearchBar';
import { theme } from '../../../utils/theme/theme';
import DrugLists from './component/DrugLists';
import Header from '../../components/Custom/Header';
import { useDispatch, useSelector } from 'react-redux';
import { useDrugSearchScreenSlice } from './slice';
import * as select from './slice/selectors';

function DrugSearch({ navigation, route }) {
  const [showFilterBar, setShowFilterBar] = useState(false);

  const serarchResult = useSelector(select.selectSearchResult);
  const { actions } = useDrugSearchScreenSlice();
  const dispatch = useDispatch();

  const handleFilterIconClick = () => {
    setShowFilterBar(!showFilterBar);
  };

  const handleFilterCloseClick = () => {
    setShowFilterBar(false);
  };

  return (
    <View style={styles.container}>
      <Header showRightIcon={true} />
      <SearchBar />
      <View style={styles.filter}>
        <TouchableOpacity
          onPress={showFilterBar ? handleFilterCloseClick : handleFilterIconClick}
          style={styles.icon}
        >
          <MaterialIcons
            name={showFilterBar ? 'close' : 'filter-list'}
            size={30}
            color={theme.black}
          />
        </TouchableOpacity>
      </View>
      {showFilterBar && <FilterBar />}
      <View style={styles.header}>
        <Text style={styles.headerText}>Search Results</Text>
      </View>
      <DrugLists />
    </View>
  );
}

const styles = {
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
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
};

export default DrugSearch;
