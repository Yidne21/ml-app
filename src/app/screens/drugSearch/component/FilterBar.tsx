import React, { useState } from 'react';
import { Dimensions, Pressable, StyleSheet, FlatList } from 'react-native';
import CustomRangeSlider from '../../../components/Custom/RangeSlider';
import { theme } from '../../../../utils/theme/theme';
import * as Crypto from 'expo-crypto';
import { Flex, Text, Button } from '../../../components/Basic';

interface IFilterBarProps {
  location: string;
  category: string;
  priceRange: number[];
  setLocation: (location: string) => void;
  setCategory: (category: string) => void;
  setPriceRange: (priceRange: number[]) => void;
  handleApplyFilter: () => void;
  setNextPage: (value: number) => void;
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
];

const FilterBar: React.FC<IFilterBarProps> = ({
  location,
  category,
  priceRange,
  setPriceRange,
  setLocation,
  setCategory,
  handleApplyFilter,
  setNextPage,
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
    <Pressable
      style={selectedLocation === item.value ? styles.selectedItem : styles.item}
      onPress={() => handleLocationPress(item.value)}
    >
      <Text>{item.label}</Text>
    </Pressable>
  );

  const renderCategoryItem = ({ item }: { item: { label: string; value: string } }) => (
    <Pressable
      style={selectedCategory === item.value ? styles.selectedItem : styles.item}
      onPress={() => handleCategoryPress(item.value)}
    >
      <Text>{item.label}</Text>
    </Pressable>
  );

  const handleClearFilter = () => {
    setNextPage(1);
    setSelectedLocation('');
    setSelectedCategory('');
    setPriceRange([5, 2000]);
    setLocation('8.220573, 37.798139');
    setCategory('');
  };

  return (
    <>
      <Flex flexDirection={'column'} width={Dimensions.get('window').width - 40}>
        <Flex>
          <Text
            fontSize={16}
            fontWeight={'bold'}
            mb={'5px'}
            padding={'5px'}
            color={theme.colors.primary[900]}
          >
            Location
          </Text>
          <FlatList
            data={LocationData}
            renderItem={renderItem}
            keyExtractor={() => Crypto.randomUUID()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </Flex>
        <Flex>
          <Text
            fontSize={16}
            fontWeight={'bold'}
            mb={'5px'}
            padding={'5px'}
            color={theme.colors.primary[900]}
          >
            Category
          </Text>
          <FlatList
            data={CategoryData}
            renderItem={renderCategoryItem}
            keyExtractor={() => Crypto.randomUUID()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </Flex>
      </Flex>
      <Flex
        flexDirection={'row'}
        height={'80px'}
        width={`${Dimensions.get('window').width - 60}px`}
        alignItems={'center'}
        justifyContent={'center'}
        marginTop={'-20px'}
        marginLeft={'10px'}
      >
        <CustomRangeSlider priceRange={priceRange} setPriceRange={setPriceRange} />
      </Flex>
      <Flex
        flexDirection={'row'}
        justifyContent={'flex-end'}
        gap={10}
        mx={'20px'}
        width={Dimensions.get('window').width - 70}
        marginTop={'10px'}
      >
        <Button
          backgroundColor={theme.shadows.sm}
          p={'10px'}
          borderRadius={15}
          width={'80px'}
          alignItems={'center'}
          onPress={handleApplyFilter}
        >
          <Text>Apply</Text>
        </Button>
        <Button
          backgroundColor={theme.shadows.sm}
          p={'10px'}
          borderRadius={15}
          width={'80px'}
          alignItems={'center'}
          onPress={handleClearFilter}
        >
          <Text>Clear All</Text>
        </Button>
      </Flex>
    </>
  );
};

const styles = StyleSheet.create({
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
