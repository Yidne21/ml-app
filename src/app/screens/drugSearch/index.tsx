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

function DrugSearch() {
  const currentLocation = useCurrentLocation() || '8.220573, 37.798139';
  const [showFilterBar, setShowFilterBar] = useState(false);
  const [drugName, setDrugName] = useState('');
  const [location, setLocation] = useState(currentLocation);
  const [priceRange, setPriceRange] = useState([5, 10000]);
  const [category, setCategory] = useState('');
  const [pharmacy, setPharmacy] = useState('');

  // const serarchResult = useSelector(select.selectSearchResult);
  const isSearching = useSelector(select.selectIsSearching);
  const { actions } = useDrugSearchScreenSlice();
  const dispatch = useDispatch();
  const serarchResult = {
    totalDocuments: 61,
    totalPages: 4,
    data: [
      {
        _id: '65bd306fd1a63b1d769c1159',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=7993323826446336',
          'https://loremflickr.com/640/480/medicin?lock=4131678989582336',
        ],
        name: 'Handcrafted Steel Cheese',
        category: 'antibiotics',
        price: 545953.5692487843,
        expiredDate: '2024-04-15T14:04:06.381Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c10ff',
          location: {
            coordinates: [37.2059, 8.9136],
            type: 'Point',
          },
          name: 'Walsh - Ankunding',
          distance: 101,
        },
      },
      {
        _id: '65bd306fd1a63b1d769c1171',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=1232322588311552',
          'https://loremflickr.com/640/480/medicin?lock=1285377232994304',
        ],
        name: 'Incredible Concrete Bike',
        category: 'diuretics',
        price: 287333.3698458737,
        expiredDate: '2024-08-03T04:26:23.804Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c10ff',
          location: {
            coordinates: [37.2059, 8.9136],
            type: 'Point',
          },
          name: 'Walsh - Ankunding',
          distance: 101,
        },
      },
      {
        _id: '65bd3070d1a63b1d769c1179',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=3976383254495232',
          'https://loremflickr.com/640/480/medicin?lock=4023547389280256',
        ],
        name: 'Electronic Bronze Fish',
        category: 'homeopathic_remedies',
        price: 109004.0931754047,
        expiredDate: '2024-09-11T13:34:16.276Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c10ff',
          location: {
            coordinates: [37.2059, 8.9136],
            type: 'Point',
          },
          name: 'Walsh - Ankunding',
          distance: 101,
        },
      },
      {
        _id: '65bd30b1a117221fa91aa291',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=687228894314496',
          'https://loremflickr.com/640/480/medicin?lock=4683755146969088',
        ],
        name: 'Intelligent Steel Chair',
        category: 'antiemetics',
        price: 1232.4968902394176,
        expiredDate: '2024-11-07T02:26:13.214Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c10ff',
          location: {
            coordinates: [37.2059, 8.9136],
            type: 'Point',
          },
          name: 'Walsh - Ankunding',
          distance: 101,
        },
      },
      {
        _id: '65bd306fd1a63b1d769c1145',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=3158334471405568',
          'https://loremflickr.com/640/480/medicin?lock=179953364631552',
        ],
        name: 'Small Rubber Car',
        category: 'antivirals',
        price: 734603.9935232839,
        expiredDate: '2024-07-26T04:25:22.332Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c1115',
          location: {
            coordinates: [36.2232, 8.6088],
            type: 'Point',
          },
          name: 'Greenfelder - Wolf',
          distance: 178.74,
        },
      },
      {
        _id: '65bd3070d1a63b1d769c1173',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=4534122382884864',
          'https://loremflickr.com/640/480/medicin?lock=6258606890549248',
        ],
        name: 'Generic Granite Shoes',
        category: 'antiemetics',
        price: 902385.9988283366,
        expiredDate: '2024-02-26T02:41:31.666Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c1115',
          location: {
            coordinates: [36.2232, 8.6088],
            type: 'Point',
          },
          name: 'Greenfelder - Wolf',
          distance: 178.74,
        },
      },
      {
        _id: '65bd30b1a117221fa91aa27e',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=6331690481876992',
          'https://loremflickr.com/640/480/medicin?lock=2096489660678144',
        ],
        name: 'Recycled Concrete Ball',
        category: 'laxatives',
        price: 810643.9142765012,
        expiredDate: '2024-11-25T15:01:23.794Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c1107',
          location: {
            coordinates: [36.2539, 7.5495],
            type: 'Point',
          },
          name: 'Turcotte - Waters',
          distance: 185.94,
        },
      },
      {
        _id: '65bd306fd1a63b1d769c1165',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=8575287962894336',
          'https://loremflickr.com/640/480/medicin?lock=1184306363891712',
        ],
        name: 'Refined Cotton Salad',
        category: 'homeopathic_remedies',
        price: 28574.28170449566,
        expiredDate: '2024-06-08T00:46:43.128Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c1101',
          location: {
            coordinates: [37.7961, 6.3998],
            type: 'Point',
          },
          name: 'Quitzon - Kilback',
          distance: 202.69,
        },
      },
      {
        _id: '65bd30b1a117221fa91aa27c',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=5189423041871872',
          'https://loremflickr.com/640/480/medicin?lock=4758701489520640',
        ],
        name: 'Generic Granite Gloves',
        category: 'anticoagulants',
        price: 740241.3653846597,
        expiredDate: '2024-08-26T02:29:05.472Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c110d',
          location: {
            coordinates: [36.0276, 8.8384],
            type: 'Point',
          },
          name: 'Erdman - Rolfson',
          distance: 206.69,
        },
      },
      {
        _id: '65bd306fd1a63b1d769c114f',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=6079203411755008',
          'https://loremflickr.com/640/480/medicin?lock=1763360976666624',
        ],
        name: 'Modern Frozen Fish',
        category: 'anticoagulants',
        price: 718666.924491874,
        expiredDate: '2024-05-13T23:18:05.337Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c1113',
          location: {
            coordinates: [37.694, 6.0447],
            type: 'Point',
          },
          name: 'Steuber and Sons',
          distance: 242.49,
        },
      },
      {
        _id: '65bd306fd1a63b1d769c116d',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=5442544695508992',
          'https://loremflickr.com/640/480/medicin?lock=5049187185983488',
        ],
        name: 'Incredible Soft Salad',
        category: 'topical_acne_medications',
        price: 926342.228192254,
        expiredDate: '2024-11-06T12:30:07.236Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c1113',
          location: {
            coordinates: [37.694, 6.0447],
            type: 'Point',
          },
          name: 'Steuber and Sons',
          distance: 242.49,
        },
      },
      {
        _id: '65bd3070d1a63b1d769c1175',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=7372394352082944',
          'https://loremflickr.com/640/480/medicin?lock=7796704556351488',
        ],
        name: 'Bespoke Metal Ball',
        category: 'antispasmodics',
        price: 756417.1319599263,
        expiredDate: '2024-08-22T13:28:20.830Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c1113',
          location: {
            coordinates: [37.694, 6.0447],
            type: 'Point',
          },
          name: 'Steuber and Sons',
          distance: 242.49,
        },
      },
      {
        _id: '65bd30b1a117221fa91aa297',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=60273115267072',
          'https://loremflickr.com/640/480/medicin?lock=6793639944519680',
        ],
        name: 'Elegant Rubber Computer',
        category: 'analgesics',
        price: 657475.3555562347,
        expiredDate: '2024-04-29T17:36:58.355Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c1113',
          location: {
            coordinates: [37.694, 6.0447],
            type: 'Point',
          },
          name: 'Steuber and Sons',
          distance: 242.49,
        },
      },
      {
        _id: '65bd30b1a117221fa91aa2b8',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=5099735459299328',
          'https://loremflickr.com/640/480/medicin?lock=4759513842319360',
        ],
        name: 'Modern Frozen Fish',
        category: 'immunoglobulins',
        price: 216057.19870887697,
        expiredDate: '2024-03-08T00:37:19.753Z',
        pharmacy: {
          _id: '65bd30b0a117221fa91aa235',
          location: {
            coordinates: [39.8805, 9.2085],
            type: 'Point',
          },
          name: 'Von Inc',
          distance: 254.15,
        },
      },
      {
        _id: '65bd306fd1a63b1d769c1163',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=2445056642383872',
          'https://loremflickr.com/640/480/medicin?lock=96150837264384',
        ],
        name: 'Practical Bronze Gloves',
        category: 'antiparasitics',
        price: 394746.1317285197,
        expiredDate: '2024-06-23T20:24:30.141Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c1121',
          location: {
            coordinates: [35.4441, 7.7163],
            type: 'Point',
          },
          name: 'Hamill - Walter',
          distance: 265.52,
        },
      },
      {
        _id: '65bd30b1a117221fa91aa28b',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=2631610249773056',
          'https://loremflickr.com/640/480/medicin?lock=2799350971367424',
        ],
        name: 'Handcrafted Frozen Shoes',
        category: 'antidepressants',
        price: 857083.8371884311,
        expiredDate: '2024-07-29T03:20:45.547Z',
        pharmacy: {
          _id: '65bd30b1a117221fa91aa262',
          location: {
            coordinates: [37.2237, 10.6786],
            type: 'Point',
          },
          name: 'Douglas - Kuphal',
          distance: 280.8,
        },
      },
      {
        _id: '65bd30b1a117221fa91aa295',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=2610109800775680',
          'https://loremflickr.com/640/480/medicin?lock=6141999325380608',
        ],
        name: 'Tasty Bronze Shirt',
        category: 'stimulants',
        price: 137491.17920268327,
        expiredDate: '2024-10-31T01:21:43.351Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c1105',
          location: {
            coordinates: [38.9133, 5.875],
            type: 'Point',
          },
          name: 'Farrell - Schuppe',
          distance: 288.71,
        },
      },
      {
        _id: '65bd3070d1a63b1d769c117b',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=3281668821483520',
          'https://loremflickr.com/640/480/medicin?lock=6100439613308928',
        ],
        name: 'Fantastic Cotton Chips',
        category: 'antispasmodics',
        price: 939361.54182069,
        expiredDate: '2024-12-26T07:48:23.713Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c10ef',
          location: {
            coordinates: [40.5056, 8.883],
            type: 'Point',
          },
          name: 'Prohaska, Daugherty and Kunde',
          distance: 307.03,
        },
      },
      {
        _id: '65ca3f93c8114e5104a646b3',
        drugPhoto: ['https://example.com/sample_drug_photo.jpg'],
        name: 'Sample Drug',
        price: 19.99,
        category: 'Pain Relief',
        expiredDate: '2024-12-31T00:00:00.000Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c10ef',
          location: {
            coordinates: [40.5056, 8.883],
            type: 'Point',
          },
          name: 'Prohaska, Daugherty and Kunde',
          distance: 307.03,
        },
      },
      {
        _id: '65bd306fd1a63b1d769c1161',
        drugPhoto: [
          'https://fakeimg.pl/150x150/bdbdbd/ffffff?text=Drug+Photo&font=noto',
          'https://loremflickr.com/640/480/medicin?lock=1846996182761472',
          'https://loremflickr.com/640/480/medicin?lock=404763499823104',
        ],
        name: 'Intelligent Concrete Cheese',
        category: 'antinauseants',
        price: 425530.6624455843,
        expiredDate: '2024-02-04T02:43:42.191Z',
        pharmacy: {
          _id: '65bd306fd1a63b1d769c111f',
          location: {
            coordinates: [37.9143, 11.0723],
            type: 'Point',
          },
          name: 'Stokes - Howell',
          distance: 317.71,
        },
      },
    ],
  };

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
          limit: 20,
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
          limit: 20,
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
      <DrugLists data={serarchResult?.data} />
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
