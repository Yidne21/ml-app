import React from 'react';
import { View, TextInput, Dimensions, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

interface SearchBarProps {
  drugName: string;
  setDrugName: (drugName: string) => void;
  handelKeyPress: () => void;
}

function SearchBar({ drugName, setDrugName, handelKeyPress }: SearchBarProps) {
  return (
    <View style={styles.inputContainer}>
      <EvilIcons name="search" size={24} color="black" style={styles.icon} />
      <TextInput
        value={drugName}
        style={styles.textInput}
        placeholder="Search Medicine or HealthCare products"
        onChangeText={(text) => setDrugName(text)}
        onKeyPress={handelKeyPress}
      />
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 1,
    color: 'gray',
  },
  inputContainer: {
    position: 'relative',
    marginTop: 10,
  },
  textInput: {
    height: 50,
    width: Dimensions.get('window').width - 40,
    borderRadius: 25,
    paddingLeft: 50,
    paddingRight: 20,
    backgroundColor: '#fff',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
  },
});
