import React, { useEffect } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { HomeStackScreenProps } from '../../../navigation/types';
import { Image, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { usePharmacyDetailSlice } from './slice';
import * as select from './slice/selector';
import InfoCard from './component/InfoCard';
import ReviewList from './component/ReviewList';
import Header from '../../components/Custom/Header';
import { theme } from '../../../utils/theme/theme';

function PharmacyProfile({ navigation, route }: HomeStackScreenProps<'PharmacyDetail'>) {
  const { actions } = usePharmacyDetailSlice();
  const dispatch = useDispatch();
  const { pharmacyId } = route.params;
  const isLoading = useSelector(select.selectIsLoadingPharmacy);
  const isLoaded = useSelector(select.selectIsLoadedPharmacy);
  const pharmacyInfo = useSelector(select.selectPharmacy);

  useEffect(() => {
    dispatch(actions.getPharmacyDetail(pharmacyId));
  }, [actions, dispatch, pharmacyId]);

  const handleDrugStoreClick = () => {
    // Navigate to DrugStore screen with the pharmacy details
    navigation.navigate('DrugSearch', {
      name: pharmacyInfo.name,
    });
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.IconContainer}>
        <Header showRightIcon={true} />
      </View>
      {isLoaded && (
        <View style={styles.container}>
          {/* cover image */}
          <View style={styles.logoContainer}>
            <Image source={{ uri: pharmacyInfo.cover }} style={styles.logo} />
          </View>
          <InfoCard pharmacyInfo={pharmacyInfo} />

          <View style={styles.hederContainer}>
            <Text style={styles.reviewText}>Reviews</Text>

            <TouchableOpacity onPress={handleDrugStoreClick}>
              <Text style={styles.storeText}>Drug Store</Text>
            </TouchableOpacity>
          </View>
          <ReviewList reviews={pharmacyInfo.reviews} />
        </View>
      )}
      {isLoading && (
        <ActivityIndicator size="large" color={theme.colors.primary[500]} style={styles.loader} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  IconContainer: {
    position: 'absolute',
    width: '100%',
    padding: 16,
    zIndex: 1,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 4,
  },
  hederContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 180,
    marginBottom: 20,
  },
  reviewText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  storeText: {
    fontSize: 16,
    color: 'green',
  },
  loader: {
    position: 'absolute',
    alignSelf: 'center',
    top: '90%',
  },
});

export default PharmacyProfile;
