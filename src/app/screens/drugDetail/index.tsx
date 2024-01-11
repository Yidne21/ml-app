import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { DrugSearchStackScreenProps } from '../../../navigation/types';
import { useDrugDetailScreenSlice } from './slice';
import { useDispatch } from 'react-redux';
import { theme } from '../../../utils/theme/theme';
import { Octicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import Header from '../../components/Custom/Header';
const drug = {
  _id: '657711b99f521e451a499394',
  ingredients: [],
  needPrescription: false,
  name: 'Tasty Frozen Shoes',
  drugPhoto: 'https://picsum.photos/seed/5Z3QZQ/100/100',
  category: 'Home',
  price: 932956.93,
  stockLevel: 885,
  receivedFrom: 'Beier Inc',
  instruction:
    'Thalassinus timor desidero succurro volo deduco turbo sponte. Crustulum tendo depraedor sperno. Volutabrum eligendi animus degero.',
  sideEffects:
    'In vindico dolorem spero ulciscor adipisci beatus thesis allatus. Sed titulus degenero quisquam tunc sulum nostrum. Beneficium incidunt asperiores uterque ex absens.',
  strengthAndDosage: 'Distinctio tener artificiose talis debitis decerno vilis blandior.',
  manufacturedDate: '2023-05-01T13:52:41.221Z',
  expiredDate: '2024-07-13T19:11:10.285Z',
};

const DrugDetail = ({ navigation, route }: DrugSearchStackScreenProps<'DrugDetail'>) => {
  const { actions } = useDrugDetailScreenSlice();
  const dispatch = useDispatch();
  const { drugId } = route.params;

  // useEffect(() => {
  //   dispatch(actions.getDrugDetail(drugId));
  // }, [dispatch]);

  // const drugInfo = useSelector(select.selectDrugDetail);

  // console.log('index.tsx--------', drugInfo);

  return (
    <View style={styles.container}>
      <Header showRightIcon={true} />
      <ScrollView>
        <Text style={styles.drugName}>{drug.name}</Text>

        <View style={styles.imageContainer}>
          <Image source={{ uri: drug.drugPhoto }} style={styles.image} />
          <View style={styles.dots}>
            {[...Array(5)].map((_, index) => (
              <Octicons
                key={index}
                name="dot"
                size={24}
                color={index === 2 ? theme.colors.primary[500] : theme.shadows.lg}
              />
            ))}
          </View>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>{drug.price.toFixed(2)} Birr</Text>
          <TouchableOpacity style={styles.btnAddToCart}>
            <Text style={styles.btnAddToCartLabel}>Add to cart</Text>
          </TouchableOpacity>
        </View>

        {renderSection('Instruction', drug.instruction)}
        {renderSection('Side Effects', drug.sideEffects)}
        {renderSection('Strength and Dosage', drug.strengthAndDosage)}

        <View style={styles.expireDate}>
          {renderRow('Wholesalers', drug.receivedFrom)}
          {renderRow('Pharmacy', drug.receivedFrom)}
          {renderRow('Manufactured Date', format(new Date(drug.manufacturedDate), 'dd/MM/yyyy'))}
          {renderRow('Expire Date', format(new Date(drug.expiredDate), 'dd/MM/yyyy'))}
        </View>
        <TouchableOpacity
          style={styles.btnGoToCart}
          onPress={() => {
            navigation.navigate('Cart');
          }}
        >
          <Text style={styles.btnGotoCartLabel}>Go to cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const renderSection = (title, content) => (
  <View style={styles.contentBox}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.content}>{content}</Text>
  </View>
);

const renderRow = (label, value) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.content}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
  },
  drugName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
    height: 150,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 50,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  btnAddToCart: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: theme.shadows.sm,
  },
  btnAddToCartLabel: {
    fontSize: 16,
    color: theme.colors.primary[500],
  },
  contentBox: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  expireDate: {
    backgroundColor: theme.shadows.sm,
    padding: 10,
    paddingLeft: 20,
    borderRadius: 10,
  },
  btnGoToCart: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: theme.colors.primary[500],
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    marginHorizontal: 4,
  },
  btnGotoCartLabel: {
    fontSize: 16,
    color: '#fff',
  },
});

export default DrugDetail;
