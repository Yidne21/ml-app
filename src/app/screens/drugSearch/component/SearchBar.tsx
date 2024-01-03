import React from 'react';
import { View, TextInput, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

function SearchBar() {
  return (
    <View style={styles.inputContainer}>
      <EvilIcons name="search" size={24} color="black" style={styles.icon} />
      <TextInput style={styles.textInput} placeholder="Search Medicine or HealthCare products" />
    </View>
  );
}

export default SearchBar;

const styles = {
  icon: {
    position: 'absolute',
    top: 55,
    left: 15,
    zIndex: 1,
    color: 'gray',
  },
  inputContainer: {
    position: 'relative',
    marginTop: 20, // Adjusted marginTop
  },
  textInput: {
    height: 50,
    width: Dimensions.get('window').width - 40,
    borderRadius: 25,
    paddingLeft: 50,
    paddingRight: 20,
    marginTop: 40,
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
};
