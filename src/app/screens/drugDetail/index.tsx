import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { DrugSearchStackScreenProps } from '../../../navigation/types';
import { useDrugDetailScreenSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../../../utils/theme/theme';
import { Octicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import Header from '../../components/Custom/Header';
import * as select from './slice/selector';
import { Button, Text, Flex, ImageBackground } from '../../components/Basic';

const DrugDetail = ({ navigation, route }: DrugSearchStackScreenProps<'DrugDetail'>) => {
  const { actions } = useDrugDetailScreenSlice();
  const dispatch = useDispatch();
  const { drugId } = route.params;
  const drug = useSelector(select.selectDrugDetail);
  const isLoaded = useSelector(select.selectIsLoaded);

  useEffect(() => {
    dispatch(actions.getDrugDetail(drugId));
  }, [actions, dispatch, drugId]);

  return (
    <Flex p={16} flex={1} backgroundColor={'#fff'}>
      <Header showRightIcon={true} />
      {isLoaded && (
        <ScrollView>
          <Text fontSize={24} fontWeight={'bold'} mb={10}>
            {drug.name}
          </Text>

          <Flex alignItems={'center'} height={150} mb={20}>
            <ImageBackground
              source={{ uri: drug.drugPhoto[1] }}
              width={100}
              height={100}
              mt={20}
              blurRadius={10}
              mb={20}
              p={10}
              resizeMode="cover"
            />
            <Flex flexDirection={'row'} justifyContent={'space-between'} width={50}>
              {[...Array(5)].map((_, index) => (
                <Octicons
                  key={index}
                  name="dot"
                  size={24}
                  color={index === 2 ? theme.colors.primary[500] : theme.shadows.lg}
                />
              ))}
            </Flex>
          </Flex>

          <Flex
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            mb={20}
          >
            <Text fontSize={18} fontWeight={'bold'}>
              {drug.price.toFixed(2)} Birr
            </Text>
            <Button p={10} borderRadius={10} backgroundColor={theme.shadows.sm}>
              <Text fontSize={16} color={theme.colors.primary[500]}>
                Add to cart
              </Text>
            </Button>
          </Flex>

          {renderSection('Instruction', drug.instruction)}
          {renderSection('Side Effects', drug.sideEffects)}
          {renderSection('Strength and Dosage', drug.strengthAndDosage)}

          <Flex backgroundColor={theme.shadows.sm} p={10} borderRadius={10}>
            {renderRow('Wholesalers', drug.receivedFrom)}
            {renderRow('Pharmacy', drug.receivedFrom)}
            {renderRow('Manufactured Date', format(new Date(drug.manufacturedDate), 'dd/MM/yyyy'))}
            {renderRow('Expire Date', format(new Date(drug.expiredDate), 'dd/MM/yyyy'))}
          </Flex>
          <Button
            p={10}
            borderRadius={20}
            backgroundColor={theme.colors.primary[500]}
            alignItems={'center'}
            mb={20}
            my={4}
            mt={20}
            onPress={() => {
              navigation.navigate('Cart');
            }}
          >
            <Text fontSize={16} color={'#fff'}>
              Go to cart
            </Text>
          </Button>
        </ScrollView>
      )}
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

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   loader: {
//     marginTop: 20,
//   },
//   drugName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   imageContainer: {
//     alignItems: 'center',
//     height: 150,
//     marginBottom: 20,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginTop: 20,
//     borderRadius: 10,
//     marginBottom: 20,
//     padding: 10,
//   },
//   dots: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: 50,
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   btnAddToCart: {
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: theme.shadows.sm,
//   },
//   btnAddToCartLabel: {
//     fontSize: 16,
//     color: theme.colors.primary[500],
//   },
//   contentBox: {
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   content: {
//     fontSize: 16,
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   expireDate: {
//     backgroundColor: theme.shadows.sm,
//     padding: 10,
//     paddingLeft: 20,
//     borderRadius: 10,
//   },
//   btnGoToCart: {
//     padding: 10,
//     borderRadius: 20,
//     backgroundColor: theme.colors.primary[500],
//     alignItems: 'center',
//     marginBottom: 20,
//     marginTop: 20,
//     marginHorizontal: 4,
//   },
//   btnGotoCartLabel: {
//     fontSize: 16,
//     color: '#fff',
//   },
// });

export default DrugDetail;
