// screens/WalkthroughScreen.js
import React, { useEffect, useRef, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { theme } from '../../utils/theme/theme';
import { RootStackScreenProps } from '../../navigation/types';
import Header from '../components/Custom/Header';
import { Flex, Text, Image, Button, Box } from '../components/Basic';
import LottieView from 'lottie-react-native';
import { width, height } from '../../utils/constants';

const walkthroughData = [
  {
    image: require('../../assets/images/walkthrough1.jpg'),
    title: 'Welcome to Medicin Locator',
    description: 'Discover nearby pharmacies and find the medicines you need with ease.',
  },
  {
    image: require('../../assets/images/walkthrough2.jpg'),
    title: 'Easy Medicine Search',
    description:
      'Search for medicines and get detailed information, including prices and availability.',
  },
  {
    image: require('../../assets/images/walkthrough3.jpg'),
    title: 'Order Online',
    description: 'Place orders online and have your medicines delivered to your doorstep.',
  },
];

function WalkThroughScreen({ navigation }: RootStackScreenProps<'WalkThrough'>) {
  const [activeStep, setActiveStep] = useState(0);
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

  const handleSkip = () => {
    // Implement logic to navigate to the main app screen
    navigation.navigate('SignUp');
    console.log('Skip pressed');
  };

  const handleNext = () => {
    if (activeStep < walkthroughData.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      // Implement logic to navigate to the main app screen
      navigation.navigate('SignUp');
      console.log('Next pressed');
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        padding: 16,
      }}
    >
      <Header showRightIcon={false} />
      <Flex alignItems={'center'} mt={'10px'}>
        <LottieView
          style={{
            flex: 1,
            width: '100%',
            height: height * 0.4,
          }}
          ref={animationRefs[0]}
          source={require('../../assets/animations/delivery-boy.json')}
          autoPlay
          loop
        />
      </Flex>

      <Flex flex={1} justifyContent={'space-between'}>
        <Box py={'20px'} alignItems={'center'} mb={'40px'}>
          <Text fontSize={'24px'} fontWeight={'bold'} mb={'10px'} color={theme.colors.primary[500]}>
            {walkthroughData[activeStep].title}
          </Text>
          <Text fontSize={16} textAlign={'center'} color={theme.colors.text}>
            Easy Medicine Search
          </Text>
        </Box>

        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          py={'20px'}
          marginBottom={'20px'}
        >
          <Button onPress={handleSkip}>
            <Text color={theme.colors.transparent} fontSize={16}>
              Skip
            </Text>
          </Button>

          <Flex flexDirection={'row'} alignItems={'center'}>
            {walkthroughData.map((_, index) => (
              <View
                key={index}
                style={[
                  {
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 5,
                  },
                  {
                    backgroundColor: index === activeStep ? theme.colors.primary[500] : 'lightgray',
                  },
                ]}
              />
            ))}
          </Flex>

          <Button onPress={handleNext}>
            <Text color={theme.colors.primary[900]} fontSize={20}>
              {activeStep === walkthroughData.length - 1 ? 'Finish' : 'Next'}
            </Text>
          </Button>
        </Flex>
      </Flex>
    </ScrollView>
  );
}

export default WalkThroughScreen;
