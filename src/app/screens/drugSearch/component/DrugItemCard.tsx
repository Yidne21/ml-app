import React from 'react';
import { Pressable, Dimensions } from 'react-native';
import { theme } from '../../../../utils/theme/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { DrugSearchStackParamList } from '../../../../navigation/types';
import { Idrug } from '../slice/types';
import { Text, Image, Flex } from '../../../components/Basic';

function DrugItemCard({ drug }: { drug: Idrug }) {
  const navigation = useNavigation<NavigationProp<DrugSearchStackParamList>>();
  const handleDrugCardPress = () => {
    // Navigate to DrugDetail screen with the drug details
    navigation.navigate('DrugDetail', {
      drugId: drug._id /* Other parameters if needed */,
    });
  };
  return (
    <Pressable onPress={handleDrugCardPress}>
      <Flex
        m={'10px'}
        borderRadius={10}
        width={Dimensions.get('window').width / 2 - 40}
        alignItems={'center'}
        height={Dimensions.get('window').width / 1.6}
        borderWidth={1}
        borderColor={theme.colors.primary[500]}
        backgroundColor={theme.colors.white}
      >
        <Flex
          borderTopRightRadius={10}
          backgroundColor={theme.shadows.sm}
          width={Dimensions.get('window').width / 2 - 40}
          height={Dimensions.get('window').width / 3}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Image
            source={{ uri: drug.drugPhoto[2] }}
            width={100}
            height={100}
            borderRadius={10}
            mb={'10px'}
            resizeMode="contain"
          />
        </Flex>
        <Flex
          alignItems={'left'}
          width={Dimensions.get('window').width / 2 - 50}
          height={Dimensions.get('window').width / 3.8}
          p={'5px'}
          gap={5}
        >
          <Text fontWeight={'bold'} fontSize={14} numberOfLines={1} ellipsizeMode="tail">
            {drug.name}
          </Text>
          <Flex justifyContent={'center'} mr={'13px'}>
            <Flex flexDirection={'row'} alignItems={'center'} gap={5}>
              <MaterialIcons name="local-pharmacy" size={24} color={theme.colors.primary[900]} />
              <Text fontSize={12} numberOfLines={1} ellipsizeMode="tail">
                {drug.pharmacy.name}{' '}
              </Text>
            </Flex>
            <Flex flexDirection={'row'} alignItems={'center'} gap={5}>
              <MaterialIcons name="location-pin" size={24} color={theme.colors.primary[900]} />
              <Text fontSize={12} numberOfLines={1} ellipsizeMode="tail">
                {drug.pharmacy.distance} km away
              </Text>
            </Flex>
            <Flex flexDirection={'row'} alignItems={'center'} gap={5}>
              <MaterialIcons name="money" size={24} color={theme.colors.primary[900]} />
              <Text fontSize={13} fontWeight={'bold'}>
                {drug.price.toFixed(2)} Birr
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Pressable>
  );
}

export default DrugItemCard;
