import React from 'react';
import { Flex, TextInput } from '../../../components/Basic';

interface UpdateFormProps {
  editedPhone?: string;
  oldPassword?: string;
  newPassword?: string;
  setEditedPhone: (text: string) => void;
  setOldPassword: (text: string) => void;
  setNewPassword: (text: string) => void;
}

const UpdateForm: React.FC<UpdateFormProps> = ({
  editedPhone,
  oldPassword,
  newPassword,
  setEditedPhone,
  setOldPassword,
  setNewPassword,
}) => {
  return (
    <Flex width="80%" marginBottom={10} marginTop={20}>
      <TextInput
        px={20}
        marginBottom={10}
        placeholder="Phone Number, Ex. 0944567892"
        value={editedPhone}
        onChangeText={(text) => setEditedPhone(text)}
        keyboardType="phone-pad"
      />
      <TextInput
        px={20}
        marginBottom={10}
        placeholder="Old password"
        value={oldPassword}
        onChangeText={(text) => setOldPassword(text)}
        secureTextEntry
      />
      <TextInput
        px={20}
        marginBottom={10}
        placeholder="New password"
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
        secureTextEntry
      />
    </Flex>
  );
};

export default UpdateForm;
