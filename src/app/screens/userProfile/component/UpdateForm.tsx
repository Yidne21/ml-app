import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

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
    <>
      <View style={styles.editForm}>
        <TextInput
          style={styles.input}
          placeholder="Edit Email"
          value={editedEmail}
          onChangeText={(text) => setEditedEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Old password"
          value={oldPassword}
          onChangeText={(text) => setOldPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="New password"
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  editForm: {
    marginTop: 20,
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default UpdateForm;
