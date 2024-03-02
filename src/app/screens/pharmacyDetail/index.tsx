import React, { useEffect } from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import { HomeStackScreenProps } from '../../../navigation/types';
import { useDispatch, useSelector } from 'react-redux';
import { usePharmacyDetailSlice } from './slice';
import * as select from './slice/selector';
import InfoCard from './component/InfoCard';
import ReviewList from './component/ReviewList';
import Header from '../../components/Custom/Header';
import { theme } from '../../../utils/theme/theme';
import { Flex, Box, Text, Image, Button } from '../../components/Basic';

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
    <Flex flex={1} backgroundColor={'#fff'}>
      <Flex
        position={'absolute'}
        width={'100%'}
        p={'16px'}
        zIndex={1}
        justifyContent={'space-between'}
      >
        <Header showRightIcon={true} />
      </Flex>
      {isLoaded && (
        <Flex flex={1}>
          {/* cover image */}
          <Box alignItems={'center'}>
            <Image
              source={{ uri: pharmacyInfo.cover }}
              width={Dimensions.get('window').width}
              height={Dimensions.get('window').height / 4}
              resizeMode="contain"
            />
          </Box>
          <InfoCard pharmacyInfo={pharmacyInfo} />

          <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mx={'20px'}
            mt={'180px'}
            mb={'20px'}
          >
            <Text fontSize={20} fontWeight={'bold'}>
              Reviews
            </Text>

            <Button onPress={handleDrugStoreClick} mr={'15px'}>
              <Text fontSize={16} color={'green'}>
                Drug Store
              </Text>
            </Button>
          </Flex>
          <ReviewList reviews={pharmacyInfo.reviews} />
        </Flex>
      )}
      {isLoading && (
        <ActivityIndicator
          size="large"
          color={theme.colors.primary[500]}
          style={{ position: 'absolute', alignSelf: 'center', top: '90%' }}
        />
      )}
    </Flex>
  );
}

export default PharmacyProfile;
