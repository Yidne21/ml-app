import { Dimensions, Platform } from 'react-native';
import React from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { theme } from '../../../utils/theme/theme';
import { Flex, Text } from '../Basic';

interface ISliderProps {
  priceRange: number[];
  setPriceRange: (priceRange: number[]) => void;
}

export default function CustomRangeSlider({ priceRange, setPriceRange }: ISliderProps) {
  const multiSliderValuesChange = (values: number[]) => {
    setPriceRange(values);
  };

  return (
    <Flex
      width={Dimensions.get('window').width - 70}
      height={50}
      mt={10}
      backgroundColor={theme.shadows.white}
      padding={10}
      borderRadius={10}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <MultiSlider
        values={[priceRange[0], priceRange[1]]}
        sliderLength={Dimensions.get('window').width - 100}
        selectedStyle={{ backgroundColor: theme.colors.primary[500] }}
        containerStyle={{ alignSelf: 'center', marginTop: -5, width: 200, marginRight: 115 }}
        onValuesChange={multiSliderValuesChange}
        markerStyle={{
          ...Platform.select({
            android: {
              height: 20,
              width: 20,
              borderRadius: 50,
              backgroundColor: theme.colors.primary[600],
            },
          }),
        }}
        min={priceRange[0]}
        max={priceRange[1]}
        step={1}
      />
      <Flex flexDirection={'row'} alignItems={'center'} justifyContent={'center'} mt={-20}>
        <Text color={'#000'}>{priceRange[0]} Birr</Text>
        <Text color={'#000'} fontSize={20}>
          {' '}
          -{' '}
        </Text>
        <Text color={'#000'}>{priceRange[1]} Birr</Text>
      </Flex>
    </Flex>
  );
}

// const styles = StyleSheet.create({
//   slider_Flex: {
//     width: Dimensions.get('window').width - 70,
//     height: 50,
//     marginTop: 10,
//     backgroundColor: theme.shadows.white,
//     padding: 10,
//     borderRadius: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
