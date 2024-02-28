import React from 'react';
import { Flex, Button, Text } from '../../../components/Basic';
import { theme } from '../../../../utils/theme/theme';

interface ButtonsProps {
  isEditMode: boolean;
  onSaveChange: () => void;
  onLogout: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ isEditMode, onSaveChange, onLogout }) => {
  return (
    <Flex flexDirection="row" marginTop={50} marginBottom={20} gap={20}>
      <Button
        padding={10}
        borderRadius={10}
        backgroundColor={theme.colors.primary[700]}
        onPress={onSaveChange}
      >
        <Text color="#fff">{isEditMode ? 'Save Changes' : 'Edit Profile'}</Text>
      </Button>
      <Button
        padding={10}
        borderRadius={10}
        backgroundColor={theme.colors.primary[700]}
        onPress={onLogout}
      >
        <Text color="#fff">Logout</Text>
      </Button>
    </Flex>
  );
};

export default Buttons;

// const styles = StyleSheet.create({
//   buttons: {
//     flex: 1,
//     flexDirection: 'row',
//     marginTop: 50,
//     marginBottom: 20,
//     gap: 20,
//   },
//   button: {
//     padding: 10,
//     borderRadius: 10,
//     backgroundColor: theme.colors.primary[700],
//   },
//   buttonText: {
//     color: '#fff',
//   },
// });
