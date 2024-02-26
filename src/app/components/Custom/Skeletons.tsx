import React from 'react';
import { Box } from '../Basic';
import { Skeleton } from 'native-base';

export const CardSkeleton = (props: { width?: string | number }) => {
  return (
    <Box
      borderRadius={10}
      width={props.width || 270}
      margin={10}
      backgroundColor="white"
      alignItems="center"
    >
      <Skeleton borderRadius={10} height={200} />
      <Skeleton.Text p="4" />
      <Box flexDirection="row" alignItems="center" padding={2}>
        <Skeleton size="45" rounded="full" />
        <Skeleton rounded="full" height={3} width="20" />
        <Skeleton width="70" height="8" borderRadius={10} marginLeft={props.width ? 140 : 70} />
      </Box>
    </Box>
  );
};

export const ProfileSkeleton = () => {
  return (
    <Box width={100} height={100}>
      <Skeleton size="100" rounded="full" />
    </Box>
  );
};

export const TopOrganizersSkeleton = () => {
  return (
    <Box
      alignItems="center"
      m={10}
      flexDirection="column"
      backgroundColor="white"
      borderRadius={10}
      width={180}
      p={1}
    >
      <Skeleton size="20" rounded="full" />
      <Skeleton rounded="full" height={5} width="40" padding={1} />
      <Skeleton rounded="full" height={5} width="20" padding={1} />
    </Box>
  );
};

export const TopDestinationsSkeleton = () => {
  return (
    <Box flex={1} height={500} marginX={2}>
      <Skeleton borderRadius={10} height={'50%'} padding={1} />
      <Skeleton borderRadius={10} height={'50%'} padding={1} />
    </Box>
  );
};

export const TestimonySkeleton = () => {
  return (
    <>
      <Skeleton rounded="full" height={3} width="200" alignSelf="center" margin={1} />
      <Skeleton rounded="full" height={3} width="40" alignSelf="center" />

      <Box
        flex={1}
        marginX={2}
        flexDirection="row"
        alignItems="center"
        alignSelf="center"
        mt={20}
        marginBottom={10}
      >
        <Skeleton size="50" rounded="full" />
        <Box flexDirection="column">
          <Skeleton rounded="full" height={4} width="40" padding={1} />
          <Skeleton rounded="full" height={4} width="40" padding={1} />
        </Box>
      </Box>
    </>
  );
};
export const LegalDocumentSkeleton = () => {
  return (
    <Box height={100} borderRadius={10} margin={2}>
      <Skeleton size="100" width={'100%'} rounded="md" />
    </Box>
  );
};
export const UploadImageSkeleton = () => {
  return (
    <Box height={100} width={125} borderRadius={10} margin={2} alignItems="center">
      <Skeleton size="100" width={'100%'} height={'100%'} rounded="md" />
    </Box>
  );
};

export const ReservedEventsSkeleton = () => {
  return (
    <Box height={100} width={350} borderRadius={10} margin={2}>
      <Skeleton size="100" width={'100%'} rounded="md" />
    </Box>
  );
};

export const WeatherSkeleton = () => {
  return (
    <Box borderRadius={10}>
      <Skeleton width="20" height="8" borderRadius={10} />
    </Box>
  );
};

export const ImageViewerSkeleton = () => {
  return (
    <Box borderRadius={10}>
      <Skeleton size="100" width={'100%'} height={'380'} rounded="md" />
      <Box margin={1} flexDirection="row">
        <Skeleton size="100" width={'40%'} height={'100'} rounded="md" margin={1} />
        <Skeleton size="100" width={'45%'} height={'100'} rounded="md" margin={1} />
        <Skeleton size="100" width={'40%'} height={'100'} rounded="md" margin={1} />
      </Box>
      <Box flexDirection="row" alignItems="center" marginTop={10} paddingLeft={250}>
        <Skeleton size="45" rounded="full" />
        <Skeleton rounded="full" height={3} width="20" />
      </Box>
      <Box margin={1} justifyContent="space-around">
        <Skeleton size="100" marginY={1} width={'100%'} rounded="md" />
        <Skeleton size="100" marginY={1} width={'100%'} rounded="md" />
        <Skeleton size="100" marginY={1} width={'100%'} rounded="md" />
        <Skeleton size="100" marginY={1} width={'100%'} rounded="md" />
      </Box>
    </Box>
  );
};

export const ProfileScreenSkeleton = () => {
  return (
    <Box height={100} flex={1}>
      <Box flexDirection="row" justifyContent="space-between" alignItems="center" padding={2}>
        <Skeleton size="65" rounded="full" />
        <Box flexDirection="column" width={120}>
          <Skeleton rounded="full" height={4} width="100%" marginBottom={1} />
          <Skeleton rounded="full" height={4} width="100%" />
        </Box>
        <Skeleton width="70" height="8" borderRadius={20} marginLeft="70" />
      </Box>
      <Box flexDirection="row" marginTop={20} marginBottom={1}>
        <Skeleton rounded="full" height={4} width="40%" />
        <Skeleton rounded="full" height={4} width="40%" />
      </Box>

      <LegalDocumentSkeleton />
      <CardSkeleton width={365} />
      <CardSkeleton width={365} />
    </Box>
  );
};

export const ReservationRequestSkeleton = () => {
  return (
    <Box width={350} borderRadius={10} margin={1} alignItems="center" alignSelf="center">
      <Skeleton size="45" width={'100%'} rounded="md" />
    </Box>
  );
};

export const IndividualReservationListInfoSkeleton = () => {
  return (
    <Box height={140} width={350} borderRadius={10} margin={2}>
      <Skeleton size="100" width={'100%'} height={'90%'} rounded="md" />
    </Box>
  );
};

export const IndividualReservationListCardSkeleton = () => {
  return (
    <Box
      width={350}
      borderRadius={10}
      margin={1}
      alignItems="center"
      alignSelf="center"
      justifyContent={'space-between'}
    >
      <Skeleton size="45" width={'100%'} rounded="md" />
      <Skeleton size="110" width={'100%'} rounded="md" marginTop={2} />
      <Skeleton size="100" width={'100%'} rounded="md" marginTop={2} />
      <Skeleton size="100" width={'100%'} rounded="md" marginTop={2} />
      <Skeleton size="105" width={'100%'} rounded="md" marginTop={2} />
    </Box>
  );
};

export const SpecialEventRequestCardSkeleton = () => {
  return (
    <Box height={70} width={360} borderRadius={10} margin={1} paddingLeft={10}>
      <Skeleton size="100" width={'100%'} height={'90%'} rounded="md" />
    </Box>
  );
};
