import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { HomeStackScreenProps } from '../../../navigation/types';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { usePharmacyDetailSlice } from './slice';
import * as select from './slice/selector';
import { FontAwesome } from '@expo/vector-icons';
import InfoCard from './component/InfoCard';
import ReviewList from './component/ReviewList';
import Header from '../../components/Custom/Header';

function PharmacyProfile({ navigation, route }: HomeStackScreenProps<'PharmacyDetail'>) {
  const { actions } = usePharmacyDetailSlice();
  const dispatch = useDispatch();
  const { pharmacyId } = route.params;

  useEffect(() => {
    dispatch(actions.getPharmacyDetail(pharmacyId));
  }, [dispatch]);

  const pharmacyInfo = useSelector(select.selectPharmacy);
  console.log(pharmacyInfo);

  // const pharmacyInfo = {
  //   _id: '657711b99f521e451a499338',
  //   location: {
  //     coordinates: [37.7801, 13.4574],
  //   },
  //   name: 'Collier, Grady and Schowalter',
  //   address: 'Suite 342',
  //   phoneNumber: '875-339-9034 x7295',
  //   email: 'Shea_Hahn@gmail.com',
  //   logo: 'https://picsum.photos/seed/SD3Gylb/100/100',
  //   socialMedia: {
  //     facebook: 'https://tan-maternity.biz',
  //     twitter: 'https://vain-limit.com/',
  //   },
  //   reviews: [
  //     {
  //       _id: '657711ba9f521e451a49944a',
  //       feedback:
  //         'Adhaero assumenda vitae talis abbas terra usitas deleniti. Deripio adiuvo sed teneo desparatus ait cras est creator nihil. Aurum ceno acervus vulnero appello a commodi audacia nostrum.',
  //       user: {
  //         _id: '657711b89f521e451a4992c4',
  //         name: 'Peggy Frami-Hauck IV',
  //         avatar: 'https://avatars.githubusercontent.com/u/97165289',
  //       },
  //       rating: 0.89,
  //     },
  //     {
  //       _id: '657711ba9f521e451a49944e',
  //       feedback:
  //         'Adopto tersus architecto somnus centum comis clamo. Ducimus suasoria vado decumbo coadunatio. Spiritus cuppedia tolero.',
  //       user: {
  //         _id: '657711b89f521e451a4992cb',
  //         name: 'Christine Konopelski',
  //         avatar: 'https://avatars.githubusercontent.com/u/97165289',
  //       },
  //       rating: 2.25,
  //     },
  //     {
  //       _id: '657711ba9f521e451a499472',
  //       feedback:
  //         'Callide abduco depulso demo thalassinus. Iusto terebro tribuo approbo. Venustas deputo testimonium videlicet fugiat defaeco assentator viridis tui subito.',
  //       user: {
  //         _id: '657711b89f521e451a4992c4',
  //         name: 'Peggy Frami-Hauck IV',
  //         avatar: 'https://avatars.githubusercontent.com/u/97165289',
  //       },
  //       rating: 0.43,
  //     },
  //     {
  //       _id: '657711ba9f521e451a499672',
  //       feedback:
  //         'Callide abduco depulso demo thalassinus. Iusto terebro tribuo approbo. Venustas deputo testimonium videlicet fugiat defaeco assentator viridis tui subito.',
  //       user: {
  //         _id: '657711b89f521e451a4992c4',
  //         name: 'Peggy Frami-Hauck IV',
  //         avatar: 'https://avatars.githubusercontent.com/u/97165289',
  //       },
  //       rating: 0.43,
  //     },
  //     {
  //       _id: '657711bb9f521e451a499472',
  //       feedback:
  //         'Callide abduco depulso demo thalassinus. Iusto terebro tribuo approbo. Venustas deputo testimonium videlicet fugiat defaeco assentator viridis tui subito.',
  //       user: {
  //         _id: '657711b89f521e451a4992c4',
  //         name: 'Peggy Frami-Hauck IV',
  //         avatar: 'https://avatars.githubusercontent.com/u/97165289',
  //       },
  //       rating: 0.43,
  //     },
  //     {
  //       _id: '657711bs9f521e451a499472',
  //       feedback:
  //         'Callide abduco depulso demo thalassinus. Iusto terebro tribuo approbo. Venustas deputo testimonium videlicet fugiat defaeco assentator viridis tui subito.',
  //       user: {
  //         _id: '657711b89f521e451a4992c4',
  //         name: 'Peggy Frami-Hauck IV',
  //         avatar: 'https://avatars.githubusercontent.com/u/97165289',
  //       },
  //       rating: 0.43,
  //     },
  //   ],
  //   avgRating: 3.9,
  // };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.IconContainer}>
        <Header showRightIcon={true} />
      </View>
      <View style={styles.container}>
        {/* cover image */}
        <View style={styles.logoContainer}>
          <Image source={{ uri: pharmacyInfo.logo }} style={styles.logo} />
        </View>
        <InfoCard />

        <View style={styles.hederContainer}>
          <Text style={styles.reviewText}>Reviews</Text>

          <TouchableOpacity>
            <Text style={styles.storeText}>Drug Store</Text>
          </TouchableOpacity>
        </View>

        {/* review list */}
        <ReviewList reviews={pharmacyInfo.reviews} />
      </View>
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
});

export default PharmacyProfile;
