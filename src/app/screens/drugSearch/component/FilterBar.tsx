import React from 'react';
import { View, TextInput, Text, Dimensions, TouchableOpacity } from 'react-native';
import CustomeDropdown from '../../../components/Custom/DropDown';
import CustomRangeSlider from '../../../components/Custom/RangeSlider';
import { theme } from '../../../../utils/theme/theme';

function FilterBar() {
  return (
    <>
      <View style={styles.dropdownContainer}>
        <View style={{ flex: 1 }}>
          <CustomeDropdown placeholder="Location" iconName="location-pin" />
        </View>
        <View style={{ flex: 1 }}>
          <CustomeDropdown placeholder="Category" iconName="category" />
        </View>
      </View>
      <View style={styles.slider}>
        <CustomRangeSlider />
      </View>
      <View style={styles.Buttons}>
        <TouchableOpacity style={styles.Button}>
          <Text>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button}>
          <Text>Clear All</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = {
  dropdownContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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
};

export default FilterBar;
