import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
// import { MultiSelect } from 'react-native-element-dropdown';
import { MaterialIcons } from '@expo/vector-icons';
import { Box } from '../Basic';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

interface IMultiSelectComponentProps {
  placeholder: string;
  iconName: string;
}

const MultiSelect: React.FC<IMultiSelectComponentProps> = ({ placeholder, iconName }) => {
  const [selected, setSelected] = useState([]);

  return (
    <Box padding={16}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Search..."
        value={selected}
        onChange={(item) => {
          setSelected(item);
        }}
        renderLeftIcon={() => (
          <MaterialIcons style={styles.icon} color="black" name={iconName} size={20} />
        )}
        selectedStyle={styles.selectedStyle}
      />
    </Box>
  );
};

export default MultiSelect;

const styles = StyleSheet.create({
  container: { padding: 16 },
  dropdown: {
    height: 50,
    width: 100,
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 12,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },
});
