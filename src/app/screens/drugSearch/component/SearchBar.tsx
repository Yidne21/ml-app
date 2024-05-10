import React from 'react';
import { Dimensions } from 'react-native';
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
    <Flex borderColor={'#ccc'} borderRadius={25}>
      <EvilIcons
        name="search"
        size={24}
        color="black"
        style={{
          position: 'absolute',
          top: 15,
          left: 15,
          zIndex: 1,
          color: 'gray',
        }}
      />
      <TextInput
        placeholder="Search Medicine or HealthCare products"
        onChangeText={(text) => setDrugName(text)}
        value={drugName}
        onChange={handelKeyPress}
        height={50}
        width={Dimensions.get('window').width - 40}
        borderRadius={25}
        paddingLeft={50}
        paddingRight={20}
        borderColor={theme.colors.primary[500]}
        autoFocus={true}
        returnKeyType="search"
      />
    </Flex>
  );
}

export default SearchBar;
