import React, { useEffect } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import {
  DrugSearchStackScreenProps,
  HomeStackParamList,
  RootStackParamList,
} from '../../../navigation/types';
import { useDrugDetailScreenSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../../../utils/theme/theme';
import { format } from 'date-fns';
import Header from '../../components/Custom/Header';
import * as select from './slice/selector';
import { Button, Text, Flex } from '../../components/Basic';
import ImageSlider from './component/ImageSlider'; // Import ImageSlider component
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { getData } from '../../../utils/configs/asyncStorage';
import Toast from 'react-native-root-toast';

const DrugDetail = ({ route, navigation }: DrugSearchStackScreenProps<'DrugDetail'>) => {
  const { actions } = useDrugDetailScreenSlice();
  const dispatch = useDispatch();
  const { drugId, stockId } = route.params;
  const drug = useSelector(select.selectDrugDetail);
  const isLoaded = useSelector(select.selectIsLoaded);
  const isAddingToCart = useSelector(select.selectIsAddingToCart);
  const cartAddSuccessMsg = useSelector(select.selectCartAddSuccessMsg);

  useEffect(() => {
    dispatch(actions.getDrugDetail({ drugId, stockId }));
  }, [actions, dispatch, drugId, stockId]);

  const homeNavigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const rootNavigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleViewPharmacy = () => {
    // Navigate to PharmacyDetail screen with the pharmacy details
    homeNavigation.navigate('PharmacyDetail', {
      pharmacyId: drug.pharmacy._id /* Other parameters if needed */,
    });
  };

  const handleAddToCart = async () => {
    const user = await getData('userData');
    if (!user) {
      rootNavigation.reset({
        index: 0,
        routes: [{ name: 'RootTab' }, { name: 'SignUp' }],
      });
      navigation.reset({
        index: 0,
        routes: [{ name: 'DrugDetail', params: { drugId, stockId } }],
      });

      return;
    }
    dispatch(
      actions.addToCart({
        pharmacyId: drug.pharmacy._id,
        drugId: drug._id,
        stockId: drug.stock._id,
      }),
    );
  };

  useEffect(() => {
    if (!isAddingToCart && cartAddSuccessMsg !== '') {
      Toast.show(cartAddSuccessMsg, {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
      });
    }
  }, [isAddingToCart, cartAddSuccessMsg]);

  return (
    <Flex p={16} flex={1} backgroundColor={'#fff'}>
      <Header showRightIcon={true} />
      {isLoaded && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <Text fontSize={24} fontWeight={'bold'} mb={10}>
            {drug.name}
          </Text>

          {/* Replace single Image component with ImageSlider */}
          <ImageSlider images={drug.drugPhoto} />

          <Flex
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            mb={20}
          >
            <Text fontSize={18} fontWeight={'bold'}>
              {drug.stock.price?.toFixed(2)} Birr
            </Text>
            <Button
              p={10}
              mx={10}
              borderRadius={10}
              backgroundColor={theme.shadows.sm}
              onPress={handleViewPharmacy}
            >
              <Text fontSize={16} color={theme.colors.primary[900]}>
                View pharmacy
              </Text>
            </Button>
          </Flex>

          {renderSection('Instruction', drug.instruction)}
          {renderSection('Side Effects', drug.sideEffects)}
          {renderSection('Strength', drug.strength)}
          {renderSection('Dosage', drug.dosage)}

          <Flex backgroundColor={theme.shadows.sm} p={10} borderRadius={10}>
            {renderRow('From', drug.stock.recievedFrom)}
            {renderRow('Pharmacy', drug.pharmacy.name)}
            {renderRow('Expire Date', format(new Date(drug.stock.expiredDate), 'dd/MM/yyyy'))}
          </Flex>
          {isAddingToCart && <ActivityIndicator size="small" color={theme.colors.primary[500]} />}
          <Button
            p={10}
            borderRadius={20}
            backgroundColor={theme.colors.primary[500]}
            alignItems={'center'}
            mb={20}
            my={4}
            mt={20}
            onPress={handleAddToCart}
          >
            <Text fontSize={16} color={'#fff'}>
              Add to cart
            </Text>
          </Button>
        </ScrollView>
      )}
      {!isLoaded && <ActivityIndicator size="large" color={theme.colors.primary[500]} />}
    </Flex>
  );
};

const renderSection = (title: string, content: string) => (
  <Flex mb={20}>
    <Text fontSize={18} fontWeight={'bold'} mb={10}>
      {title}
    </Text>
    <Text fontSize={16}>{content}</Text>
  </Flex>
);

const renderRow = (label: string, value: string) => (
  <Flex flexDirection={'row'} mb={10}>
    <Text fontSize={16} fontWeight={'bold'} mr={10}>
      {label}:
    </Text>
    <Text fontSize={16}>{value}</Text>
  </Flex>
);

export default DrugDetail;
