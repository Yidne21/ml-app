import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { MaterialIcons } from '@expo/vector-icons';

interface IDropdownProps {
  placeholder: string;
  iconName: string;
  data: { label: string; value: string }[];
}

const CustomeDropdown: React.FC<IDropdownProps> = ({ placeholder, iconName, data }) => {
  const [value, setValue] = useState(null);

  const renderItem = (item: {
    label:
      | string
      | number
      | boolean
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | null
      | undefined;
    value: null;
  }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <MaterialIcons style={styles.icon} color="green" name="check-circle-outline" size={20} />
        )}
      </View>
    );
  };

  return (
    <Dropdown
      style={styles.Customedropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      searchPlaceholder="Search..."
      value={value}
      onChange={(item) => {
        setValue(item.value);
      }}
      renderLeftIcon={() => (
        <MaterialIcons style={styles.icon} color="black" name={iconName} size={20} />
      )}
      renderItem={renderItem}
    />
  );
};

export default CustomeDropdown;

const styles = StyleSheet.create({
  Customedropdown: {
    marginTop: 20,
    marginVertical: 20,
    marginHorizontal: 10,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 3,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
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
});
