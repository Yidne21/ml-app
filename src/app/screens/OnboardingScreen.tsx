import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { width, height } from '../../utils/constants';
import { theme } from '../../utils/theme/theme';
import { RootStackParamList } from '../../navigation/types';

const Dots = ({ selected }: { selected: boolean }) => {
  const backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Done</Text>
  </TouchableOpacity>
);

type OnboardingScreenProps = {
  navigation: NavigationProp<RootStackParamList, 'WalkThrough'>;
};

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const animationRefs = [
    useRef<LottieView>(null),
    useRef<LottieView>(null),
    useRef<LottieView>(null),
  ];

  useEffect(() => {
    animationRefs.forEach((ref) => {
      ref.current?.play();
    });
  }, []);

  const ImageAnimation = () => {
    return (
      <LottieView
        style={{
          width: width,
          height: height * 0.4,
        }}
        ref={animationRefs[1]}
        source={require('../../assets/animations/search and order.json')}
        autoPlay
        loop
      />
    );
  };

  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.navigate('SignUp')}
      onDone={() => navigation.navigate('SignUp')}
      pages={[
        {
          backgroundColor: theme.colors.primary[100],
          image: (
            <Image
              source={require('../../assets/images/pharmacy-location.png')}
              style={{ width: width * 0.9, height: width, resizeMode: 'contain' }}
            />
          ),
          title: 'Welcome',
          subtitle: 'Discover nearby pharmacies.',
        },
        {
          backgroundColor: theme.colors.primary[100],
          image: (
            <View>
              <ImageAnimation />
            </View>
          ),
          title: 'Easy Medicine Search',
          subtitle:
            'Search for medicines and get detailed information, including prices and availability.',
        },
        {
          backgroundColor: theme.colors.primary[200],
          image: (
            <View>
              <LottieView
                style={{
                  width: width,
                  height: height * 0.4,
                }}
                ref={animationRefs[2]}
                source={require('../../assets/animations/delivery-boy.json')}
                autoPlay
                loop
              />
            </View>
          ),
          title: 'Order Online',
          subtitle: 'Place orders online and have your medicines delivered to your doorstep.',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
