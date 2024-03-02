import React from 'react';
import { VStack, HStack, Text, IconButton, CloseIcon, Alert } from 'native-base';

interface Props {
  toast: unknown;
  id: unknown;
  title: string;
  variant: string;
  status?: string;
  description?: string;
  isClosable?: boolean;
  width?: number | string;
}

export const AlertComponent = (props: Props) => {
  return (
    <Alert
      maxWidth="100%"
      alignSelf="center"
      flexDirection="row"
      status={props.status ? props.status : 'info'}
      variant={props.variant}
    >
      <VStack space={1} flexShrink={1} w={props.width || '80%'}>
        <HStack flexShrink={1} alignItems="center" justifyContent="space-between">
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Text
              fontSize="md"
              fontWeight="medium"
              flexShrink={1}
              color={
                props.variant === 'solid'
                  ? 'lightText'
                  : props.variant !== 'outline'
                    ? 'darkText'
                    : null
              }
            >
              {props.title}
            </Text>
          </HStack>
          {props.isClosable ? (
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" />}
              _icon={{
                color: props.variant === 'solid' ? 'lightText' : 'darkText',
              }}
              onPress={() => props.toast.close(props.id)}
            />
          ) : null}
        </HStack>
        {props.description && (
          <Text
            px="6"
            color={
              props.variant === 'solid'
                ? 'lightText'
                : props.variant !== 'outline'
                  ? 'darkText'
                  : null
            }
            fontSize={10}
          >
            {props.description}
          </Text>
        )}
      </VStack>
    </Alert>
  );
};
