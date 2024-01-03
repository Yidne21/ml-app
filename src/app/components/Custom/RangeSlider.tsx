import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { theme } from '../../../utils/theme/theme';

export default function CustomRangeSlider() {
  const [value, setValue] = useState({ values: [0, 37] });
  const multiSliderValuesChange = (values) => {
    setValue({
      values,
    });
  };

  return (
    <View style={styles.slider_box}>
      <MultiSlider
        values={[value.values[0], value.values[1]]}
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
        min={0}
        max={37}
        step={1}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -20,
        }}
      >
        <Text style={{ color: '#000' }}>{value.values[0]} Birr</Text>
        <Text style={{ fontSize: 20, color: '#000' }}> - </Text>
        <Text style={{ color: '#000' }}>{value.values[1]}k Birr</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slider_box: {
    width: Dimensions.get('window').width - 70,
    height: 50,
    marginTop: 10,
    backgroundColor: theme.shadows.white,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
