import React from 'react';
import { Flex, TextInput } from '../../../components/Basic';

interface UpdateFormProps {
  editedEmail?: string;
  oldPassword?: string;
  newPassword?: string;
  setEditedEmail: (text: string) => void;
  setOldPassword: (text: string) => void;
  setNewPassword: (text: string) => void;
}

const UpdateForm: React.FC<UpdateFormProps> = ({
  editedEmail,
  oldPassword,
  newPassword,
  setEditedEmail,
  setOldPassword,
  setNewPassword,
}) => {
  return (
    <Flex width="80%" marginBottom={10} marginTop={20}>
      <TextInput
        px={20}
        marginBottom={10}
        placeholder="Email, eg. jondow@gmail.com"
        value={editedEmail}
        onChangeText={(text) => setEditedEmail(text)}
      />
      <TextInput
        px={20}
        marginBottom={10}
        placeholder="Old password"
        value={oldPassword}
        onChangeText={(text) => setOldPassword(text)}
      />
      <TextInput
        px={20}
        marginBottom={10}
        placeholder="New password"
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
      />
    </Flex>
  );
};

export default UpdateForm;
