import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { theme } from '../../../../utils/theme/theme';
import { Flex, TextInput } from '../../../components/Basic';

interface SearchBarProps {
  drugName: string;
  setDrugName: (drugName: string) => void;
  handelKeyPress: () => void;
}

function SearchBar({ drugName, setDrugName, handelKeyPress }: SearchBarProps) {
  return (
    <Flex position={'relative'} mt={10}>
      <EvilIcons name="search" size={24} color="black" style={styles.icon} />
      <TextInput
        value={drugName}
        placeholder="Search Medicine or HealthCare products"
        onChangeText={(text) => setDrugName(text)}
        onChange={handelKeyPress}
        height={50}
        width={Dimensions.get('window').width - 40}
        borderRadius={25}
        paddingLeft={50}
        paddingRight={20}
        borderColor={theme.colors.primary[500]}
      />
    </Flex>
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
});
