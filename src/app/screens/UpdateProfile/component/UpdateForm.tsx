import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { theme } from '../../../../utils/theme/theme';

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
          placeholder="Email, eg. jondow@gmail.com "
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
    width: '80%',
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    height: 50,
    borderColor: theme.colors.primary[500], // Use your primary color
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 10,
    fontSize: 16,
  },
});

export default UpdateForm;
