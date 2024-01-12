import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import CustomRangeSlider from '../../../components/Custom/RangeSlider';
import { theme } from '../../../../utils/theme/theme';
import * as Crypto from 'expo-crypto';

interface IFilterBarProps {
  location: string;
  category: string;
  priceRange: number[];
  pharmacy: string;
  setLocation: (location: string) => void;
  setCategory: (category: string) => void;
  setPriceRange: (priceRange: number[]) => void;
  setPharmacy: (pharmacy: string) => void;
  handleApplyFilter: () => void;
}

const LocationData = [
  { label: 'Addis Ababa', value: '9.0300, 38.7400' },
  { label: 'Godē', value: '5.9527, 43.5516' },
  { label: 'Ērer Sātā', value: '9.5667, 41.3833' },
  { label: 'Nazrēt', value: '8.5414, 39.2689' },
  { label: 'Gonder', value: '12.6075, 37.4592' },
  { label: 'Mekele', value: '13.4969, 39.4769' },
  { label: 'Āwasa', value: '7.0500, 38.4667' },
  { label: 'Dire Dawa', value: '9.6000, 41.8667' },
  { label: 'Bahir Dar', value: '11.6000, 37.3833' },
  { label: 'Shashemenē', value: '7.2000, 38.6000' },
  { label: 'Sodo', value: '6.8550, 37.7808' },
  { label: 'Ārba Minch’', value: '6.0333, 37.5500' },
  { label: 'Desē', value: '11.1333, 39.6333' },
  { label: 'Hosa’ina', value: '7.5500, 37.8500' },
  { label: 'Jīma', value: '7.6667, 36.8333' },
  { label: 'Harar', value: '9.3111, 42.1278' },
  { label: 'Jijiga', value: '9.3500, 42.8000' },
  { label: 'Dīla', value: '6.4083, 38.3083' },
  { label: 'Nek’emtē', value: '9.0833, 36.5500' },
  { label: 'Debre Birhan', value: '9.6833, 39.5333' },
  { label: 'Debre Mark’os', value: '10.3333, 37.7167' },
  { label: 'Ferfer', value: '5.0833, 45.0833' },
  { label: 'Āwarē', value: '8.2667, 44.1500' },
  { label: 'Kombolcha', value: '11.0867, 39.7367' },
  { label: 'Debre Tabor', value: '11.8500, 38.0167' },
  { label: 'Ādīgrat', value: '14.2667, 39.4500' },
  { label: 'Giyon', value: '8.5333, 37.9667' },
  { label: 'Āsela', value: '7.9500, 39.1167' },
  { label: 'K’ebrī Dehar', value: '6.7333, 44.2667' },
  { label: 'Debre Zeyit', value: '8.7500, 38.9833' },
  { label: 'Hāgere Hiywet', value: '8.9833, 37.8500' },
  { label: 'Āksum', value: '14.1208, 38.7278' },
  { label: 'Bodītī', value: '6.8667, 37.8667' },
  { label: 'Finote Selam', value: '10.7000, 37.2667' },
  { label: 'Semera', value: '11.7922, 41.0086' },
  { label: 'Goba', value: '7.0000, 39.9833' },
  { label: 'Yirga ‘Alem', value: '6.7500, 38.4167' },
  { label: 'Ādwa', value: '14.1667, 38.9000' },
  { label: 'Gambēla', value: '8.2500, 34.5833' },
  { label: 'Bedēsa', value: '6.8830, 37.9329' },
  { label: 'Āzezo', value: '12.5586, 37.4308' },
  { label: 'Butajīra', value: '8.1208, 38.3792' },
  { label: 'Dawēro', value: '6.7167, 37.7833' },
  { label: 'Āsbe Teferī', value: '9.0833, 40.8500' },
  { label: 'Dodola', value: '6.9833, 39.1833' },
  { label: 'Asasa', value: '7.1000, 39.2000' },
  { label: 'Bichena', value: '10.4500, 37.0667' },
  { label: 'Dilla', value: '6.4167, 39.5500' },
  { label: 'Kibre Mengist', value: '5.8833, 38.9833' },
  { label: 'Ārība', value: '6.6333, 38.9167' },
  { label: 'Hāgere Selam', value: '6.0333, 39.2167' },
  { label: 'Bure', value: '10.7000, 37.0667' },
  { label: 'Werota', value: '11.9167, 39.6333' },
  { label: 'Shambu', value: '9.5667, 37.1000' },
  { label: 'Dejen', value: '10.1667, 38.1333' },
  { label: 'Bako', value: '5.7833, 36.5667' },
  { label: 'Dembi Dolo', value: '8.5333, 34.8000' },
  { label: 'Kemisē', value: '9.8500, 39.7333' },
  { label: 'Agaro', value: '7.8500, 36.6500' },
  { label: 'Agere Maryam', value: '6.0500, 37.5833' },
  { label: 'Leku', value: '6.3333, 38.2333' },
  { label: 'Wenjī', value: '9.1500, 38.5000' },
  { label: 'Wuch’alē', value: '9.7833, 39.1833' },
  { label: 'Shakīso', value: '5.7667, 38.9167' },
  { label: 'Ziway', value: '7.9333, 38.7167' },
  { label: 'Ginir', value: '5.6500, 38.7333' },
  { label: 'Sire', value: '9.0333, 39.9333' },
  { label: 'Kofelē', value: '6.1167, 36.7167' },
  { label: 'Huruta', value: '9.2333, 39.0667' },
  { label: 'Hāgere Maryam', value: '9.0500, 38.5000' },
  { label: 'Āsosa', value: '10.0667, 34.5333' },
  { label: 'Harerē', value: '9.3094, 42.1258' },
  { label: 'Lāli Belā', value: '11.0833, 39.7333' },
  { label: 'Asaita', value: '11.5636, 41.4392' },
  { label: 'Shīrē', value: '9.1667, 41.7500' },
  { label: 'Robīt', value: '11.7325, 39.8561' },
  { label: 'Bishoftu', value: '9.0333, 40.9667' },
  { label: 'Woreilu', value: '10.0667, 39.9333' },
  { label: 'Hārer', value: '9.3094, 42.1258' },
  { label: 'Bure', value: '10.7000, 37.0667' },
  { label: 'Zalambessa', value: '14.5511, 38.1500' },
  { label: 'Sīrīgī', value: '6.0167, 44.8000' },
  { label: 'Fichē', value: '9.8000, 37.7167' },
  { label: 'Lāy Gayint', value: '12.0167, 39.6333' },
  { label: 'Bichena', value: '10.4500, 37.0667' },
  { label: 'Sebeta', value: '9.1333, 38.7500' },
  { label: 'Dabat', value: '12.9842, 37.7656' },
  { label: 'Gambēla', value: '8.2500, 34.5833' },
  { label: 'Shēko', value: '6.1667, 36.4333' },
  { label: 'Dēbre Sīna', value: '10.3500, 39.7167' },
  { label: 'Dima', value: '10.0667, 34.5333' },
  { label: 'Dembidollo', value: '8.5333, 34.8000' },
  { label: 'Sululta', value: '9.1833, 38.7667' },
  { label: 'Bonga', value: '7.2833, 36.2333' },
  { label: 'Mīzan Teferī', value: '6.9833, 35.5833' },
  { label: 'Yirga Ch’efe', value: '6.2500, 38.2500' },
  { label: 'Āwash', value: '8.9833, 40.1667' },
  { label: 'Shēbele', value: '8.8500, 38.4333' },
  { label: 'Hādīya', value: '5.7500, 36.5667' },
  { label: 'Sebeta', value: '9.1333, 38.7500' },
  { label: 'Adīs Zemen', value: '10.9000, 37.2500' },
  { label: 'Nāzrēt', value: '8.5414, 39.2689' },
  { label: 'Jimma', value: '7.6667, 36.8333' },
  { label: 'Mīdīrē', value: '6.9833, 37.6167' },
];

const CategoryData = [
  { label: 'Analgesics', value: 'analgesics' },
  { label: 'Antibiotics', value: 'antibiotics' },
  { label: 'Antidepressants', value: 'antidepressants' },
  { label: 'Antihypertensives', value: 'antihypertensives' },
  { label: 'Antipyretics', value: 'antipyretics' },
  { label: 'Antivirals', value: 'antivirals' },
  { label: 'Bronchodilators', value: 'bronchodilators' },
  { label: 'Diuretics', value: 'diuretics' },
  { label: 'Hormones', value: 'hormones' },
  { label: 'Immunosuppressants', value: 'immunosuppressants' },
  { label: 'Laxatives', value: 'laxatives' },
  { label: 'Muscle Relaxants', value: 'muscle_relaxants' },
  { label: 'Narcotics', value: 'narcotics' },
  { label: 'Nonsteroidal Anti-Inflammatory Drugs (NSAIDs)', value: 'nsaids' },
  { label: 'Sedatives', value: 'sedatives' },
  { label: 'Stimulants', value: 'stimulants' },
  { label: 'Tranquilizers', value: 'tranquilizers' },
  { label: 'Antifungals', value: 'antifungals' },
  { label: 'Antiemetics', value: 'antiemetics' },
  { label: 'Anticoagulants', value: 'anticoagulants' },
  { label: 'Antidiabetics', value: 'antidiabetics' },
  { label: 'Antiemetics', value: 'antiemetics' },
  { label: 'Antinauseants', value: 'antinauseants' },
  { label: 'Antipsychotics', value: 'antipsychotics' },
  { label: 'Antiseptics', value: 'antiseptics' },
  { label: 'Antispasmodics', value: 'antispasmodics' },
  { label: 'Antitussives', value: 'antitussives' },
  { label: 'Expectorants', value: 'expectorants' },
  { label: 'Antimalarials', value: 'antimalarials' },
  { label: 'Antiparasitics', value: 'antiparasitics' },
  { label: 'Antiseizure Medications', value: 'antiseizure_medications' },
  { label: 'Antiglaucoma Medications', value: 'antiglaucoma_medications' },
  { label: 'Antiemetics', value: 'antiemetics' },
  { label: 'Immunoglobulins', value: 'immunoglobulins' },
  { label: 'Vitamins', value: 'vitamins' },
  { label: 'Minerals', value: 'minerals' },
  { label: 'Homeopathic Remedies', value: 'homeopathic_remedies' },
  { label: 'Herbal Supplements', value: 'herbal_supplements' },
  { label: 'Probiotics', value: 'probiotics' },
  { label: 'Dietary Supplements', value: 'dietary_supplements' },
  { label: 'Topical Steroids', value: 'topical_steroids' },
  { label: 'Topical Antifungals', value: 'topical_antifungals' },
  { label: 'Topical Antibiotics', value: 'topical_antibiotics' },
  { label: 'Topical Analgesics', value: 'topical_analgesics' },
  { label: 'Topical Antiseptics', value: 'topical_antiseptics' },
  { label: 'Topical Acne Medications', value: 'topical_acne_medications' },
  { label: 'Topical Corticosteroids', value: 'topical_corticosteroids' },
  { label: 'Topical Retinoids', value: 'topical_retinoids' },
];

const FilterBar: React.FC<IFilterBarProps> = ({
  location,
  category,
  priceRange,
  setPriceRange,
  setLocation,
  setCategory,
  handleApplyFilter,
}) => {
  const [selectedLocation, setSelectedLocation] = useState(location);
  const [selectedCategory, setSelectedCategory] = useState(category);

  const handleLocationPress = (value: string) => {
    setSelectedLocation(value);
    setLocation(value);
  };

  const handleCategoryPress = (value: string) => {
    setSelectedCategory(value);
    setCategory(value);
  };

  const renderItem = ({ item }: { item: { label: string; value: string } }) => (
    <TouchableOpacity
      style={selectedLocation === item.value ? styles.selectedItem : styles.item}
      onPress={() => handleLocationPress(item.value)}
    >
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderCategoryItem = ({ item }: { item: { label: string; value: string } }) => (
    <TouchableOpacity
      style={selectedCategory === item.value ? styles.selectedItem : styles.item}
      onPress={() => handleCategoryPress(item.value)}
    >
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  const handleClearFilter = () => {
    setSelectedLocation('');
    setSelectedCategory('');
    setPriceRange([5, 10000]);
    setLocation('8.220573, 37.798139');
    setCategory('');
  };

  return (
    <>
      <View style={styles.dropdownContainer}>
        <View>
          <Text style={styles.filterTitle}>Location</Text>
          <FlatList
            data={LocationData}
            renderItem={renderItem}
            keyExtractor={() => Crypto.randomUUID()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <Text style={styles.filterTitle}>Category</Text>
          <FlatList
            data={CategoryData}
            renderItem={renderCategoryItem}
            keyExtractor={() => Crypto.randomUUID()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.slider}>
        <CustomRangeSlider priceRange={priceRange} setPriceRange={setPriceRange} />
      </View>
      <View style={styles.Buttons}>
        <TouchableOpacity style={styles.Button} onPress={handleApplyFilter}>
          <Text>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button} onPress={handleClearFilter}>
          <Text>Clear All</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    flexDirection: 'column',
    width: Dimensions.get('window').width - 40,
  },
  slider: {
    flexDirection: 'row',
    height: 80,
    width: Dimensions.get('window').width - 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -20,
    marginLeft: 10, // Adjusted marginTop
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    padding: 5,
    color: theme.colors.primary[900],
  },
  Buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    marginHorizontal: 20,
    width: Dimensions.get('window').width - 70,
    marginTop: 0, // Adjusted marginTop
  },
  Button: {
    backgroundColor: theme.shadows.sm,
    padding: 10,
    borderRadius: 15,
    width: 80,
    alignItems: 'center',
  },

  item: {
    padding: 10,
    margin: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.primary[500], // Change as needed
  },
  selectedItem: {
    padding: 10,
    margin: 5,
    borderRadius: 8,
    backgroundColor: theme.colors.primary[500], // Change as needed
  },
});

export default FilterBar;
