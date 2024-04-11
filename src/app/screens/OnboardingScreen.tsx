import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import { theme } from '../../utils/theme/theme';
import { RootStackParamList } from '../../navigation/types';
import { Button, Text, Box, Image } from '../components/Basic';
import { wp, fp } from '../../utils/constants';

const Dots = ({ selected }: { selected: boolean }) => {
  const backgroundColor = selected ? theme.colors.primary[500] : 'rgba(0, 0, 0, 0.3)';
  const dotSize = selected ? 10 : 6;

  return (
    <Box
      width={dotSize * 2}
      height={dotSize}
      borderRadius={dotSize / 2}
      mx={'3px'}
      backgroundColor={backgroundColor}
    />
  );
};

const Skip = ({ ...props }) => (
  <Button mx={'10px'} {...props}>
    <Text fontSize={16} color={theme.colors.primary[900]}>
      Skip
    </Text>
  </Button>
);

const Next = ({ ...props }) => (
  <Button
    mx={'10px'}
    p={'10px'}
    backgroundColor={theme.colors.primary[600]}
    borderRadius={20}
    mb={'10px'}
    {...props}
  >
    <AntDesign name="arrowright" size={24} color={theme.colors.white} />
  </Button>
);

const Done = ({ ...props }) => (
  <Button
    mx={'10px'}
    py={'15px'}
    px={'15px'}
    backgroundColor={theme.colors.primary[600]}
    borderRadius={25}
    mb={'10px'}
    {...props}
  >
    <Text fontSize={fp(1.3)} color={theme.colors.white} fontWeight="bold">
      Get Started
    </Text>
  </Button>
);

type OnboardingScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'WalkThrough'>;
};

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.navigate('SignUp')}
      onDone={() => navigation.navigate('SignUp')}
      bottomBarColor={theme.colors.white}
      transitionAnimationDuration={900}
      subTitleStyles={{ color: theme.colors.black, fontSize: wp(3) }}
      titleStyles={{ color: theme.colors.black, fontSize: wp(6) }}
      imageContainerStyles={{ width: wp(100), height: wp(100) }}
      pages={[
        {
          backgroundColor: theme.colors.white,
          image: (
            <Image
              source={require('../../assets/illustrators/map1.png')}
              width={wp(90)}
              height={wp(100)}
              aspectRatio={1}
            />
          ),
          title: 'Welcome',
          subtitle: 'Explore nearby pharmacies.',
        },
        {
          backgroundColor: theme.colors.white,
          image: (
            <Image
              source={require('../../assets/illustrators/search.png')}
              style={{ width: wp(90), height: wp(100), aspectRatio: 1 }}
            />
          ),
          title: 'Search and Buy drugs online',
          subtitle:
            'Search for medicines and get detailed information, including prices and Buy online.',
        },
        {
          backgroundColor: theme.colors.white,
          image: (
            <Image
              source={require('../../assets/illustrators/pay.png')}
              style={{ width: wp(90), height: wp(100), aspectRatio: 1 }}
            />
          ),
          title: 'Simple online payment',
          subtitle: 'Pay your order fee using our easy and trusted chapa online payment.',
        },
        {
          backgroundColor: theme.colors.white,
          image: (
            <Image
              source={require('../../assets/illustrators/delivery2.png')}
              width={wp(90)}
              height={wp(100)}
              aspectRatio={1}
            />
          ),
          title: 'Order deliver to your home',
          subtitle: 'Place orders online and have your medicines delivered to your doorstep.',
        },
        {
          backgroundColor: theme.colors.white,
          image: (
            <Image
              source={require('../../assets/illustrators/Confirmed.png')}
              width={wp(90)}
              height={wp(100)}
              aspectRatio={1}
            />
          ),
          title: 'Confirm your delivery',
          subtitle: 'Confirm your order are delivered on time.',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
