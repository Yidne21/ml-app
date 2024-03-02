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
    <Flex
      position={'relative'}
      m={'5px'}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.15)"
      borderColor={'#ccc'}
      borderWidth={1}
      borderRadius={25}
      px={'10px'}
      mx={'10px'}
    >
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
