import React, { useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { Flex } from '../../../components/Basic'; // Import your Flex component from your library
import { Octicons } from '@expo/vector-icons'; // Assuming you're using Expo for vector icons
import { theme } from '../../../../utils/theme/theme';
import { NativeSyntheticEvent, ScrollViewProps } from 'react-native';
import { hp, wp } from '../../../../utils/constants';

const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const windowWidth = wp(100);

  const handleScroll = (event: NativeSyntheticEvent<ScrollViewProps>) => {
    const contentOffsetX = event.nativeEvent.contentOffset?.x ?? 0;
    const index = Math.round(contentOffsetX / windowWidth); // Calculate index based on window width
    setCurrentIndex(index);
  };

  return (
    <Flex alignItems="center" height={hp(30)}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={{ width: '100%' }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{
              width: windowWidth,
              height: hp(30),
              borderRadius: 10,
              padding: 20,
              margin: 10,
            }} // Set width to window width
            resizeMode="cover"
          />
        ))}
      </ScrollView>
      <Flex flexDirection="row" justifyContent="center" mt={10}>
        {images.map((_, index) => (
          <Octicons
            key={index}
            name="dot"
            size={24}
            color={index === currentIndex ? theme.colors.primary[500] : theme.shadows.lg}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default ImageSlider;
